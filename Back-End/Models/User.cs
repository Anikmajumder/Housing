using System.ComponentModel.DataAnnotations;

namespace Back_End.Models
{
    public class User
    {
        public int ID { get; set; }
        [Required]

        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}