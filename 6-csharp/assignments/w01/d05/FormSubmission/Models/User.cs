using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models
{
    public class User
    {

        [Required]
        [Display(Name = "First Name:")]
        public string FirstName {get;set;}
        [Required]
        [Display(Name = "Last Name:")]

        public string LastName {get;set;}
        [Required]
        public int Age {get;set;}
        [Required]
        [Display(Name = "Email Address:")]
        [EmailAddress]
        public string Email {get;set;}
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}
    }
}