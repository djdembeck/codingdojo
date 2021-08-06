using ModelFun.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ModelFun.Controllers
{
    public class UserController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            string message = "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.";
            return View("Index", message);
        }

        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numArray = {0, 1, 2, 3, 4, 5, 6, 7};
            return View("Numbers", numArray);
        }

        [HttpGet("user")]
        public IActionResult UserDetail()
        {
            User user1 = new User()
            {
                FirstName = "Sally",
                LastName = "Supervisor"
            };
            return View(user1);
        }
        [HttpGet("users")]
        public IActionResult UsersDetail()
        {
            List<User> users = new List<User>();
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
            users.Add(user1);
            users.Add(user2);
            users.Add(user3);
            users.Add(user4);
            return View(users);
        }
    }
}