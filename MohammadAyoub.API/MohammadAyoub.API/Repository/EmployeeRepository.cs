using Microsoft.EntityFrameworkCore;
using MohammadAyoub.API.Contracts;
using MohammadAyoub.API.Data.Model;

namespace MohammadAyoub.API.Repository
{
    public class EmployeeRepository:IEmployeeRepository
    {
        private readonly EmpDbContext _context;
        public EmployeeRepository(EmpDbContext context)
        {
            this._context = context;
        }

        public async Task<TblEmployee> CreateAsync(TblEmployee employee)
        {
            await this._context.AddAsync(employee);
            await this._context.SaveChangesAsync();
            return employee;
        }
        public async Task DeleteAsync(int empId)
        {
            var employee = await GetAsync(empId);

            if (employee is null)
            {
                throw new Exception($"EmployeeID {empId} is not found.");
            }
            this._context.Set<TblEmployee>().Remove(employee);
            await _context.SaveChangesAsync();
        }
        public async Task<List<TblEmployee>> GetAllAsync()
        {
            return await _context.Set<TblEmployee>().ToListAsync();
        }
        public async Task<TblEmployee?> GetAsync(int? empId)
        {
            if (empId == null)
            {
                return null;
            }
            return await this._context.Employees.FindAsync(empId);
        }
        public async Task UpdateAsync(TblEmployee employee)
        {
            _context.Update(employee);
            await _context.SaveChangesAsync();
        }
    }
}
