using Microsoft.AspNetCore.Mvc;
namespace ModelFun.Controllers
{
    public class UserController : Controller
    {
        [HttpGet("")]
        public IActionResult UserDetail()
        {
            User user1 = new User()
            {
                FirstName = "Sally",
                LastName = "Supervisor"
            };
            User user2 = new User()
            {
                FirstName = "Danny",
                LastName = "Developer"
            };
            User user3 = new User()
            {
                FirstName = "Otis",
                LastName = "Operations"
            };
            User user4 = new User()
            {
                FirstName = "Erin",
                LastName = "Engineer"
            };
            return View(user1);
        }
    }
}