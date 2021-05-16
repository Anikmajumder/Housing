using System.Threading.Tasks;
using Back_End.Data.Repository;
using Back_End.Interface;

namespace Back_End.Data
{

    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;
        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;

        }
        public ICityRepository CityRepository => new CityRepository(dc);

        public async Task<bool> SaveAsync()
        {
            return await dc.SaveChangesAsync()>0;
        }
    }
}