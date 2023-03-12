using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MohammadAyoub.API.Contracts;
using MohammadAyoub.API.Data.Model;
using MohammadAyoub.API.DTOs;

namespace MohammadAyoub.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeController(IMapper mapper,
          IEmployeeRepository employeeRepository)
        {
            this._mapper = mapper;
            this._employeeRepository = employeeRepository;
        }

        [HttpPost]
        public async Task<ActionResult<TblEmployee>> CreateEmployee(TblEmployeeDto createEmployeeDto)
        {
            var employee = _mapper.Map<TblEmployee>(createEmployeeDto);

            await this._employeeRepository.CreateAsync(employee);

            return CreatedAtAction("GetAllEmployees", new { id = employee.Id }, employee);
        }

        // GET: api/GetEmployee/1
        [HttpGet("GetEmployee")]
        public async Task<ActionResult<TblEmployeeDto>> GetEmployee(int id)
        {
            var employee = await this._employeeRepository.GetAsync(id);

            if (employee == null)
            {
               // return StatusCode(Microsoft.AspNetCore.Http.StatusCodes.);
                throw new Exception($"EmployeeID {id} is not found.");
            }

            var employeeDetailsDto = _mapper.Map<TblEmployeeDto>(employee);

            return Ok(employeeDetailsDto);
        }

        [HttpGet("GetAllEmployees")]
        public async Task<ActionResult<List<TblEmployeeDto>>> GetAllEmployees()
        {
            var empoyees = await this._employeeRepository.GetAllAsync();
            var records = _mapper.Map<List<TblEmployeeDto>>(empoyees);
            return Ok(records);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, TblEmployeeDto employeeDto)
        {
            if (id != employeeDto.Id)
            {
                return BadRequest("Invalid Employee Id");
            }

            var employee = await _employeeRepository.GetAsync(id);

            if (employee == null)
            {
                throw new Exception($"EmployeeID {id} is not found.");
            }

            _mapper.Map(employeeDto, employee);

            try
            {
                await _employeeRepository.UpdateAsync(employee);
            }
            catch (Exception)
            {
                throw new Exception($"Error occured while updating EmployeeID {id}.");
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployee(int id)
        {
            await _employeeRepository.DeleteAsync(id);
            return NoContent();
        }
    }
}
