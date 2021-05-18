using System.ComponentModel.DataAnnotations;

namespace Back_End.Dtos
{
    public class CityDto
    {
         public int Id { get; set; }
         [Required(ErrorMessage="Name is mandatory field")]
         [StringLength(10, MinimumLength=2)]
         [RegularExpression(".*[a-zA-Z]+.*", ErrorMessage="Only Numerics are not allowed")]
         public string Name { get; set; }
        [Required]
        public string Country{get;set;}

    }
}