using MohammadAyoub.API.Data.Model;

namespace MohammadAyoub.API.Contracts
{
    public interface IAccountRepository
    {
        Task<Account?> GetAsync(Account account);
        Task<Account> CreateAsync(Account account);
    }
}
