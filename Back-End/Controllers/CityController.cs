using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Back_End.Data;
using Back_End.Data.Repository;
using Back_End.Dtos;
using Back_End.Interface;
using Back_End.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Authorization;

namespace Back_End.Controllers
{
    [Authorize]
    
    public class CityController : BaseController
    {
        
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public CityController( IUnitOfWork unitOfWork,IMapper mapper){
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        [HttpGet]
        //[AllowAnonymous]
        public async Task<IActionResult> GetCities()
        {
           
            var cities = await unitOfWork.CityRepository.GetCities();
            var citiesDto = mapper.Map<IEnumerable<CityDto>>(cities);
            // var citiesDto = from c in cities
            //     select new CityDto(){
            //         Id=c.Id,
            //         Name=c.Name

            //     };
            return Ok(citiesDto);
        }

        // [HttpPost("add")]
        // [HttpPost("add/{cityName}")]
        // public async Task<IActionResult> AddCities(string cityName)
        // {
        //     City city = new City();
        //     city.Name = cityName;
        //     await dc.Cities.AddAsync(city);
        //     await dc.SaveChangesAsync();
        //     return Ok(city);
        // }

        //post in a json format
        [HttpPost("post")]
        public async Task<IActionResult> AddCities(CityDto cityDto)
        {
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = DateTime.Today;
            city.LastUpdatedOn = DateTime.Now;
            // var city = new City{
            //     Name=cityDto.Name,
            //     LastUpdatedBy = DateTime.Today,
            //     LastUpdatedOn = DateTime.Now
            // };

            unitOfWork.CityRepository.Addcity(city);
            await unitOfWork.SaveAsync();
            return StatusCode(201);
        }
       
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDto cityDto)
        {
           if(id!=cityDto.Id){
                return BadRequest("Update not allowed");
            }
            var cityFromDb = await unitOfWork.CityRepository.FindCity(id);
            if(cityFromDb == null){
                return BadRequest("Update not allowed");
            }
            cityFromDb.LastUpdatedBy = DateTime.Today;
            cityFromDb.LastUpdatedOn= DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            throw new Exception("SOme unknown error occured");
            await unitOfWork.SaveAsync();
            return StatusCode(200);
        }

        [HttpPut("updateCityName/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityUpdateDto cityDto)
        {
            
            var cityFromDb = await unitOfWork.CityRepository.FindCity(id);

            cityFromDb.LastUpdatedBy = DateTime.Today;
            cityFromDb.LastUpdatedOn= DateTime.Now;
            mapper.Map(cityDto, cityFromDb);
            await unitOfWork.SaveAsync();
            return StatusCode(200);
        }

        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateCityPatch(int id, JsonPatchDocument<City> cityToPatch)
        {
            var cityFromDb = await unitOfWork.CityRepository.FindCity(id);
            cityFromDb.LastUpdatedBy = DateTime.Today;
            cityFromDb.LastUpdatedOn= DateTime.Now;
           
            cityToPatch.ApplyTo(cityFromDb,ModelState);
            await unitOfWork.SaveAsync();
            return StatusCode(200);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {

            unitOfWork.CityRepository.DeleteCity(id);
            await unitOfWork.SaveAsync();
            return Ok(id);
        }

    }
}