namespace MohammadAyoub.API.DTOs
{
    public class TblEmployeeDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Age { get; set; } = string.Empty;
        public DateTime DOB { get; set; }
    }
}
