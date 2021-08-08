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

        [HttpPost("survey/create")]
        public IActionResult Create(Survey survey)
        {
            if(ModelState.IsValid)
            {
                return RedirectToAction("Show", survey);
            }
            else
            {
                return View("New");
            }
        }

        [HttpGet("show")]
        public IActionResult Show(Survey survey)
        {
            return View(survey);
        }
    }
}