using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers
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
                    return RedirectToAction("Dashboard");
                }
            }

            return View("Index");
        }

        [HttpPost("login")]
        public IActionResult Login(LoginUser user)
        {
            if(ModelState.IsValid)
            {
                var UserObj = _context.Users.FirstOrDefault(u => u.Email == user.Email);
                if(UserObj == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email/Password");
                    return View("Index");
                }

                var hasher = new PasswordHasher<LoginUser>();
                var result = hasher.VerifyHashedPassword(user, UserObj.Password, user.Password);
                if (result == 0)
                {
                    ModelState.AddModelError("Password", "Invalid Password");
                    return View("Index");
                }

                HttpContext.Session.SetInt32("UserId", UserObj.UserId);
                HttpContext.Session.SetString("UserName", UserObj.FirstName);
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [HttpGet("weddings")]
        public IActionResult Dashboard()
        {
            if (HttpContext.Session.GetInt32("UserId") != null)
            {
                ViewBag.CurrentUser = _context.Users
                    .FirstOrDefault(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")));
            }
            else
            {
                return RedirectToAction("Index");
            }

            List<Wedding> AllWeddings = _context.Weddings.ToList();

            ViewBag.UpcomingWeddings = _context.Weddings
            .OrderByDescending(d => d.Date)
            .Take(5)
            .Include(x => x.AllUsers)
                .ThenInclude(y => y.UserRSVPing)
            .ToList();

            return View();
        }

        [HttpGet("wedding/new")]
        public IActionResult New()
        {
            if (HttpContext.Session.GetInt32("UserId") != null)
            {
                ViewBag.CurrentUser = _context.Users
                    .FirstOrDefault(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")));
            }
            else
            {
                return RedirectToAction("Index");
            }
            return View();
        }

        [HttpPost("weddings")]
        public IActionResult Create(Wedding wedding)
        {
            if(ModelState.IsValid)
            {
                _context.Add(wedding);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("New");
            }
        }

        [HttpPost("weddings/{id}")]
        public IActionResult Attend(RSVP rsvp)
        {
            if(ModelState.IsValid)
            {
                _context.Add(rsvp);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("Dashboard");
            }
        }

        [HttpGet("weddings/{id}/unattend")]
        public IActionResult UnAttend(int id)
        {
            RSVP rsvp = _context.RSVPs
                .Where(x => x.WeddingId.Equals(id))
                .FirstOrDefault(u => u.UserId.Equals((int)HttpContext.Session.GetInt32("UserId")));
            _context.Remove(rsvp);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("weddings/{id}")]
        public IActionResult Show(int id)
        {
            ViewBag.Wedding = _context.Weddings
            .SingleOrDefault(d => d.WeddingId == id);

            ViewBag.Guests = _context.Users
            .Include(user => user.AllWeddings)
                .ThenInclude(user => user.WeddingToRSVP)
            .Where(x => x.AllWeddings.Any(y => y.WeddingToRSVP.WeddingId.Equals(id)))
            .ToList();

            return View();
        }
    }
}
