using Microsoft.EntityFrameworkCore;
using MohammadAyoub.API.Contracts;
using MohammadAyoub.API.Data.Model;

namespace MohammadAyoub.API.Repository
{
    public class AccountRepository: IAccountRepository
    {
        private readonly EmpDbContext _context;
        public AccountRepository(EmpDbContext context)
        {
            this._context = context;
        }
        public async Task<Account> CreateAsync(Account account)
        {
            await this._context.AddAsync(account);
            await this._context.SaveChangesAsync();
            return account;
        }

        public async Task<Account?> GetAsync(Account account)
        {
            if (account.Email == null)
            {
                return null;
            }
            return await this._context.Accounts.FirstOrDefaultAsync(i => i.Email == account.Email && i.Password == account.Password);
        }
    }
}
