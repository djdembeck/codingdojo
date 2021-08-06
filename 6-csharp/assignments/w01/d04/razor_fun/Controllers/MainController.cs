using System;
// using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace razor_fun.Controllers
{
    public class MainController : Controller
    {
        [HttpGet("")]
        public ViewResult Main()
        {
            return View();
        }
    }
}