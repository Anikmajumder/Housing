using System.Threading.Tasks;
using Back_End.Interface;
using Back_End.Models;
using Microsoft.EntityFrameworkCore;

namespace Back_End.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;
        public UserRepository(DataContext dc)
        {
            this.dc = dc;

        }
        public async Task<User> Authenticate(string userName, string password)
        {
            return await dc.Users.FirstOrDefaultAsync(x=>x.Username == userName && x.Password==password);
        }
    }
}