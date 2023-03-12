using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using MohammadAyoub.API.Contracts;
using MohammadAyoub.API.Data.Model;
using MohammadAyoub.API.DTOs;

namespace MohammadAyoub.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IAccountRepository _accountRepository;

        public AccountController(IMapper mapper,
          IAccountRepository accountRepository)
        {
            this._mapper = mapper;
            this._accountRepository = accountRepository;
        }

        [HttpPost]
        public async Task<ActionResult<Account>> CreateEmployee(Account accountModel)
        {
            var account = _mapper.Map<Account>(accountModel);

            await this._accountRepository.CreateAsync(account);

            return CreatedAtAction("Login", new { id = account.Id }, account);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<Account>> Login(Account account)
        {
            var emails = await this._accountRepository.GetAsync(account);
  
            if (emails == null)
            {
                throw new Exception($"Enter Invalid Username and Password.");
            }
            var accountDTOs = _mapper.Map<AccountDTOs>(emails);

            return Ok(accountDTOs);
        }
    }
}
