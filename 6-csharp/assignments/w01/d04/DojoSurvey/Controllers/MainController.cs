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
        public IActionResult Show(string Name, string Location, string FavLang, string Comment)
        {
            ViewBag.Name = Name;
            ViewBag.Location = Location;
            ViewBag.FavLang = FavLang;
            ViewBag.Comment = Comment;
            return View();
        }
    }
}