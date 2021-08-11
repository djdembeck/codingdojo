using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DojoDachi.Models;
using Microsoft.AspNetCore.Http;

namespace DojoDachi.Controllers
{
    public class HomeController : Controller
    {
        private int? GetLevel(string name)
        {
            return HttpContext.Session.GetInt32(name);
        }

        private void SetLevel(string name, int lvl)
        {
            HttpContext.Session.SetInt32(
                name, Convert.ToInt32(lvl)
            );
        }

        private void AdjustLevel(string name, int adjust)
        {
            int CurrentLvl = (int)GetLevel(name);
            int NewLvl = CurrentLvl + adjust;
            SetLevel(name, NewLvl);
        }

        string[] LevelNames = { "Fullness", "Happiness", "Meals", "Energy" };

        Random rand = new Random();

        public int PercentChance()
        {
            int randchance = rand.Next(1,101);
            return randchance;
        }

        public IActionResult Index()
        {
            if (GetLevel("Fullness") == null)
            {
                foreach (string lvlname in LevelNames)
                {
                    SetLevel("Fullness", 20);
                    SetLevel("Happiness", 20);
                    SetLevel("Meals", 3);
                    SetLevel("Energy", 50);
                }
            }
            else if ((int)GetLevel("Energy") >= 100 && (int)GetLevel("Fullness") >= 100 && (int)GetLevel("Happiness") >= 100)
            {
                ViewBag.Status = "win";
                TempData["Message"] = "Your Hammy has won!!!";
                TempData["src"] = "";
            }
            else if ((int)GetLevel("Fullness") == 0 || (int)GetLevel("Happiness") == 0)
            {
                ViewBag.Status = "lose";
                TempData["Message"] = "Your Hammy has passed away :(";
                TempData["src"] = "";
            }

            ViewBag.Fullness = GetLevel("Fullness");
            ViewBag.Happiness = GetLevel("Happiness");
            ViewBag.Meals = GetLevel("Meals");
            ViewBag.Energy = GetLevel("Energy");
            ViewBag.Message = TempData["Message"];
            ViewBag.Source = TempData["src"];

            return View();
        }

        public IActionResult Feed()
        {
            int CurrentMealLvl = (int)GetLevel(LevelNames[2]);

            if (CurrentMealLvl != Convert.ToInt32(0))
            {
                AdjustLevel("Meals", -1);

                if (PercentChance() < 25)
                {
                    TempData["Message"] = "The chubby guy is grumpy!";
                }
                else
                {
                    AdjustLevel("Fullness", rand.Next(5,11));

                    TempData["Message"] = "The chubby guy keeps going!";
                }
            }
            else
            {
                TempData["Message"] = "The chubby guy cries at empty fridge...";
            }

            TempData["src"] = "feed";
            return RedirectToAction("Index");
        }

        public IActionResult Play()
        {
            AdjustLevel("Energy", -5);

            if (PercentChance() < 25)
            {
                TempData["Message"] = "Hamster doesn't feel like playing with you today...";
            }
            else
            {
                AdjustLevel("Happiness", rand.Next(5,11));

                TempData["Message"] = "Hamster has case of the zoomies...";
            }

            TempData["src"] = "play";
            return RedirectToAction("Index");
        }

        public IActionResult Work()
        {
            AdjustLevel("Energy", -5);
            AdjustLevel("Meals", rand.Next(1,4));

            TempData["Message"] = "Intelligence mode: activated";

            TempData["src"] = "work";
            return RedirectToAction("Index");
        }

        public IActionResult Sleep()
        {
            AdjustLevel("Energy", 15);
            AdjustLevel("Happiness", -5);
            AdjustLevel("Fullness", -5);

            TempData["Message"] = "Snore snore snore";
            TempData["src"] = "sleep";
            return RedirectToAction("Index");
        }

        public IActionResult Restart()
        {
            HttpContext.Session.Clear();

            return RedirectToAction("Index");
        }
    }
}
