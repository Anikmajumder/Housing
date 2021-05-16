using System.Threading.Tasks;
using Back_End.Data;

namespace Back_End.Interface
{
    public interface IUnitOfWork
    {
        ICityRepository CityRepository {get;}
        Task<bool> SaveAsync();   
    }
}