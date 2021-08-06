using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
    public class User
    {

        [Required]
        public string FirstName {get;set;}
        [Required]
        public string LastName {get;set;}
        [Required]
        public int Age {get;set;}
        [Required]
        [EmailAddress]
        public string Email {get;set;}
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}
    }
}