using System;
using System.ComponentModel.DataAnnotations;

namespace Back_End.Models
{
    public class City
    {
        public int Id { get; set; }
        // [Required(ErrorMessage="Name is mandatory field")]
        // [StringLength(3, MinimumLength=2)]
        public string Name { get; set; }
        [Required]
        // public string Country { get; set; }
        public string Country{get;set;}
        public DateTime LastUpdatedBy{get;set;}
        public DateTime LastUpdatedOn{get;set;}

    }
}