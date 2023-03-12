using Microsoft.EntityFrameworkCore;

namespace MohammadAyoub.API.Data.Model
{
    public class EmpDbContext : DbContext
    {
        public EmpDbContext()
        {
        }

        public EmpDbContext(DbContextOptions<EmpDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblEmployee> Employees { get; set; } = null!;
        public virtual DbSet<Account> Accounts { get; set; } = null!;


    }
}
