using DojoSurvey.Models;
using Microsoft.AspNetCore.Mvc;

namespace DojoSurvey.Controllers
{
    public class MainController : Controller
    {
        [HttpGet("")]
        public RedirectToActionResult Index()
        {
            return RedirectToAction("New");
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost("show")]
        public IActionResult Show(Survey survey)
        {
            return View(survey);
        }
    }
}