using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BankAccounts.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace BankAccounts.Controllers
{
    public class HomeController : Controller
    {
        private Context _context;

        public HomeController(Context context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            if (HttpContext.Session.GetInt32("UserId") != null)
            {
                ViewBag.CurrentUser = _context.Users
                    .FirstOrDefault(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")));
            }
            return View();
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(u => u.Email == user.Email))
                {
                    ModelState.AddModelError("Email", "Email already in use!");
                }
                else
                {
                    // Hash given password
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    user.Password = Hasher.HashPassword(user, user.Password);
                    _context.Add(user);
                    _context.SaveChanges();
                    HttpContext.Session.SetInt32("UserId", user.UserId);
                    HttpContext.Session.SetString("UserName", user.FirstName);
                    return RedirectToAction("Account");
                }
            }

            return View("Index");
        }

        [HttpGet("login")]
        public IActionResult Login()
        {
            if (HttpContext.Session.GetInt32("UserId") != null)
            {
                ViewBag.CurrentUser = _context.Users
                    .FirstOrDefault(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")));
            }
            return View();
        }

        [HttpPost("login")]
        public IActionResult PostLogin(LoginUser user)
        {
            if(ModelState.IsValid)
            {
                var UserObj = _context.Users.FirstOrDefault(u => u.Email == user.Email);
                if(UserObj == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Login");
                }

                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(user, UserObj.Password, user.Password);
                if (result == 0)
                {
                    ModelState.AddModelError("Password", "Invalid Password");
                    return View("Login");
                }

                HttpContext.Session.SetInt32("UserId", UserObj.UserId);
                HttpContext.Session.SetString("UserName", UserObj.FirstName);
                return RedirectToAction("Account");
            }
            else
            {
                return View("Login");
            }
        }

        [HttpGet("account")]
        public IActionResult Account()
        {
            if (HttpContext.Session.GetInt32("UserId") != null)
            {
                ViewBag.CurrentUser = _context.Users
                    .FirstOrDefault(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")));
            }
            else
            {
                return RedirectToAction("Login");
            }
                ViewBag.UserTransactions = _context.Transactions
                    .Include(t => t.OrigUser)
                    .Where(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")))
                    .OrderByDescending(u => u.CreatedAt)
                    .ToList();
                ViewBag.UserBalance = _context.Transactions
                    .Include(t => t.OrigUser)
                    .Where(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")))
                    .Sum(i => i.Amount);
            return View();
        }

        [HttpPost("transact")]
        public IActionResult Transact(Transaction transaction)
        {
            if(ModelState.IsValid)
            {
                int sum = _context.Transactions
                    .Include(t => t.OrigUser)
                    .Where(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")))
                    .Sum(i => i.Amount);
                if(transaction.Amount + sum < sum)
                {
                    ModelState.AddModelError("Amount", "Need more cheddar!");
                }
                else
                {
                    _context.Add(transaction);
                    _context.SaveChanges();
                    return RedirectToAction("Account");
                }
            }

            return View("Account");
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
    }
}
