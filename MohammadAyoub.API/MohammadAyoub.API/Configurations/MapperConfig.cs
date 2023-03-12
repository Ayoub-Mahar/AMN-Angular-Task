using static System.Runtime.InteropServices.JavaScript.JSType;
using AutoMapper;
using MohammadAyoub.API.Data.Model;
using MohammadAyoub.API.DTOs;

namespace MohammadAyoub.API.Configurations
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            //CreateMap<TblEmployee, TblEmployeeDto>().ReverseMap();
           // CreateMap<TblEmployee, TblEmployeeDto>().ReverseMap();
            CreateMap<TblEmployee, TblEmployeeDto>().ReverseMap();
            CreateMap<TblEmployee, TblEmployeeDto>();

            CreateMap<Account, AccountDTOs>().ReverseMap();
        }
    }
}
