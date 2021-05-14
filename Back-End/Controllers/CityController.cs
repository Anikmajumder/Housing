using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Back_End.Data;
using Back_End.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dc;
        public CityController(DataContext dc){
                this.dc =dc;
        }
        [HttpGet]
        public async Task<IActionResult> GetCities(){
            var cities = await dc.Cities.ToListAsync();
            return Ok(cities);
        }

        [HttpPost("add")]
        [HttpPost("add/{cityName}")]
        public async Task<IActionResult> AddCities( string cityName){
            City city = new City();
            city.Name=cityName;
            await dc.Cities.AddAsync(city);
            await dc.SaveChangesAsync();
            return Ok(city);
        }

        //post in a json format
        [HttpPost("post")]
        public async Task<IActionResult> AddCities( City city){
            // City city = new City();
            // city.Name=cityName;
            await dc.Cities.AddAsync(city);
            await dc.SaveChangesAsync();
            return Ok(city);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity( int id){
            
            var city = await dc.Cities.FindAsync(id);
            dc.Cities.Remove(city);
            await dc.SaveChangesAsync();
            return Ok(id);
        }
        
    }
}