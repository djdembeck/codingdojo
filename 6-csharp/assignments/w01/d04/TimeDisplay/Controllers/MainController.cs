using System;
using Microsoft.AspNetCore.Mvc;

namespace TimeDisplay.Controllers
{
    public class MainController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            DateTime CurrentTime = DateTime.Now;
            ViewBag.time = CurrentTime.ToString("MMMM dd, yyyy hh:mm tt");
            return View();
        }
    }
}