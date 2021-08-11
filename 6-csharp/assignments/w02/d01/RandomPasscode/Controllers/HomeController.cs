using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RandomPasscode.Models;
using Microsoft.AspNetCore.Http;


namespace RandomPasscode.Controllers
{
    public class HomeController : Controller
    {
        private int? ViewCount
        {
            get { return HttpContext.Session.GetInt32("count"); }
        }

        public IActionResult Index()
        {
            if (ViewCount == null)
            {
                int? Count;
                Count = 1;
                HttpContext.Session.SetInt32("count", Convert.ToInt32(Count));
            }
            
            ViewBag.ViewCount = ViewCount;
            ViewBag.Passcode = TempData["Passcode"];
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create()
        {
            int? Count;
            Count = ViewCount + 1;
            HttpContext.Session.SetInt32("count", Convert.ToInt32(Count));

            TempData["Passcode"] = Guid.NewGuid().ToString("n").ToUpper().Substring(0, 14);
            return RedirectToAction("Index");
        }
    }
}
