using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private Context _context;

        // here we can "inject" our context service into the constructor
        public HomeController(Context context)
        {
            _context = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            List<Chef> AllChefs = _context.Chefs.ToList();

            ViewBag.RecentChefs = _context.Chefs
            .OrderByDescending(d => d.CreatedAt)
            .Take(5)
            .ToList();

            Console.WriteLine(ViewBag.RecentChefs);

            @ViewBag.Status = "chefs";
            return View();
        }

        [HttpGet("dishes")]
        public IActionResult Dishes()
        {
            List<Dish> AllDishes = _context.Dishes.ToList();

            ViewBag.RecentDishes = _context.Dishes
            .OrderByDescending(d => d.CreatedAt)
            .Take(5)
            .Include(dish => dish.OrigChef)
            .ToList();

            @ViewBag.Status = "dishes";
            return View();
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            @ViewBag.Status = "newchef";
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(Chef chef)
        {
            if(ModelState.IsValid)
            {
                _context.Add(chef);
                _context.SaveChanges();
                return RedirectToAction("index");
            }
            else
            {
                return View("New");
            }
        }

        [HttpGet("dishes/new")]
        public IActionResult NewDish()
        {
            List<Chef> AllChefs = _context.Chefs.ToList();

            @ViewBag.AllChefs = AllChefs;
            @ViewBag.Status = "newdish";
            return View();
        }

        [HttpPost("dishes/create")]
        public IActionResult CreateDish(Dish dish)
        {
            if(ModelState.IsValid)
            {
                _context.Add(dish);
                _context.SaveChanges();
                return RedirectToAction("index");
            }
            else
            {
                return View("NewDish");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Show(int id)
        {
            ViewBag.ThisDish = _context.Dishes
            .SingleOrDefault(d => d.DishId == id);
            return View();
        }

        [HttpGet("delete/{id}")]
        public IActionResult Delete(int id)
        {
            Dish ThisDish = _context.Dishes
            .SingleOrDefault(d => d.DishId == id);

            _context.Dishes.Remove(ThisDish);
            _context.SaveChanges();

            return RedirectToAction("index");
        }

        [HttpGet("edit/{id}")]
        public IActionResult Edit(int id)
        {
            Dish ThisDish = _context.Dishes
            .SingleOrDefault(d => d.DishId == id);
            return View(ThisDish);
        }

        [HttpPost("{id}")]
        public IActionResult Update(int id, Dish dish)
        {
            Dish ThisDish = _context.Dishes
            .SingleOrDefault(d => d.DishId == id);

            if(ModelState.IsValid)
            {
                ThisDish.OrigChef = dish.OrigChef;
                ThisDish.Name = dish.Name;
                ThisDish.Tastiness = dish.Tastiness;
                ThisDish.Calories = dish.Calories;
                ThisDish.Description = dish.Description;
                _context.SaveChanges();
                return RedirectToAction("show", new { id = id });
            }
            else
            {
                return View();
            }

        }
    }
}
