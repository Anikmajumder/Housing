using System.Collections.Generic;
using System.Threading.Tasks;
using Back_End.Models;

namespace Back_End.Interface
{
    public interface ICityRepository
    {
         Task<IEnumerable<City>> GetCities();
            void Addcity(City city);
            void DeleteCity(int CityId); 
            Task<City> FindCity(int id);
            
    }
}