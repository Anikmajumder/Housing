using AutoMapper;
using Back_End.Dtos;
using Back_End.Models;

namespace Back_End.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City,CityDto>().ReverseMap();
            CreateMap<City,CityUpdateDto>().ReverseMap();


        }
    }
}