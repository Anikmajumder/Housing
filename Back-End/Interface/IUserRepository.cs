using System.Threading.Tasks;
using Back_End.Models;

namespace Back_End.Interface
{
    public interface IUserRepository
    {
         Task<User> Authenticate(string userName, string password);
    }
    
}