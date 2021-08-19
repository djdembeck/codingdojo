using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using ProductsCategories.Models;

namespace ProductsCategories.Controllers
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
            List<Product> AllProducts = _context.Products.ToList();

            ViewBag.RecentProducts = _context.Products
            .OrderByDescending(d => d.CreatedAt)
            .Take(5)
            .ToList();

            return View();
        }

        [HttpPost("products")]
        public IActionResult CreateProduct(Product product)
        {
            if(ModelState.IsValid)
            {
                _context.Add(product);
                _context.SaveChanges();
                return RedirectToAction("index");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("products/{id}")]
        public IActionResult ShowProduct(int id)
        {
            ViewBag.ThisProduct = _context.Products
            .SingleOrDefault(d => d.ProductId == id);

            ViewBag.NotProductsCategories = _context.Categories
            .Include(category => category.AllProducts)
                .ThenInclude(category => category.ProductInCateogry)
            .Where(x => ! x.AllProducts.Any(y => y.ProductInCateogry.ProductId.Equals(id)))
            .ToList();

            ViewBag.ProductsCategories = _context.Categories
            .Include(category => category.AllProducts)
                .ThenInclude(category => category.ProductInCateogry)
            .Where(x => x.AllProducts.Any(y => y.ProductInCateogry.ProductId.Equals(id)))
            .ToList();

            return View();
        }

        [HttpPost("products/{id}")]
        public IActionResult AddCategoryToProduct(Association association)
        {
            if(ModelState.IsValid)
            {
                _context.Add(association);
                _context.SaveChanges();
                return RedirectToAction("");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("categories")]
        public IActionResult Categories()
        {
            List<Category> AllCategories = _context.Categories.ToList();

            ViewBag.RecentCategories = _context.Categories
            .OrderByDescending(d => d.CreatedAt)
            .Take(5)
            .ToList();

            return View();
        }

        [HttpPost("categories")]
        public IActionResult CreateCategory(Category category)
        {
            if(ModelState.IsValid)
            {
                _context.Add(category);
                _context.SaveChanges();
                return RedirectToAction("categories");
            }
            else
            {
                return View("Categories");
            }
        }

        [HttpGet("categories/{id}")]
        public IActionResult ShowCategory(int id)
        {
            ViewBag.ThisCategory = _context.Categories
            .SingleOrDefault(d => d.CategoryId == id);

            ViewBag.NotCategoryProducts = _context.Products
            .Include(category => category.AllCategories)
                .ThenInclude(category => category.CategoryOfProduct)
            .Where(x => ! x.AllCategories.Any(y => y.CategoryOfProduct.CategoryId.Equals(id)))
            .ToList();

            ViewBag.CategoryProducts = _context.Products
            .Include(category => category.AllCategories)
                .ThenInclude(category => category.CategoryOfProduct)
            .Where(x => x.AllCategories.Any(y => y.CategoryOfProduct.CategoryId.Equals(id)))
            .ToList();

            return View();
        }
    }
}
