using MohammadAyoub.API.Data.Model;

namespace MohammadAyoub.API.Contracts
{
    public interface IEmployeeRepository
    {
        Task<TblEmployee?> GetAsync(int? empID);

        Task<List<TblEmployee>> GetAllAsync();

        Task<TblEmployee> CreateAsync(TblEmployee employee);

        Task DeleteAsync(int empID);

        Task UpdateAsync(TblEmployee employee);
    }
}
