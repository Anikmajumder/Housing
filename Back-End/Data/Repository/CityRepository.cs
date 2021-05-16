using System.Collections.Generic;
using System.Threading.Tasks;
using Back_End.Interface;
using Back_End.Models;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Data.Repository
{
    public class CityRepository : ICityRepository
    {
        private readonly DataContext dc;

        public CityRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public void Addcity(City city)
        {
            dc.Cities.AddAsync(city);
        }

        public void DeleteCity(int CityId)
        {
            var city = dc.Cities.Find(CityId);
            dc.Cities.Remove(city);
        }

        public async Task<City> FindCity(int id)
        {
           return await dc.Cities.FindAsync(id);
        }

        public async Task<IEnumerable<City>> GetCities()
        {
            return await dc.Cities.ToListAsync();
        }

    }
}