using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.WomenLeague = _context.Leagues
                .Where(l => l.Name.Contains("Womens"))
                .ToList();
            ViewBag.HockeySport = _context.Leagues
                .Where(l => l.Sport.Contains("Hockey"))
                .ToList();
            ViewBag.NotFootball = _context.Leagues
                .Where(l => ! l.Sport.Contains("Football"))
                .ToList();
            ViewBag.ConferenceLeagues = _context.Leagues
                .Where(l => l.Name.Contains("Conference"))
                .ToList();
            ViewBag.AtlanticLeague = _context.Leagues
                .Where(l => l.Name.Contains("Atlantic"))
                .ToList();
            ViewBag.DallasTeams = _context.Teams
                .Where(t => t.Location.Contains("Dallas"))
                .ToList();
            ViewBag.RaptorTeams = _context.Teams
                .Where(t => t.TeamName.Contains("Raptors"))
                .ToList();
            ViewBag.CityTeams = _context.Teams
                .Where(t => t.Location.Contains("City"))
                .ToList();
            ViewBag.StartsTTeams = _context.Teams
                .Where(t => t.TeamName.StartsWith("T"))
                .ToList();
            ViewBag.TeamsOrderLocation = _context.Teams
                .OrderBy(t => t.Location)
                .ToList();
            ViewBag.TeamsOrderNameReverse = _context.Teams
                .OrderByDescending(t => t.TeamName)
                .ToList();
            ViewBag.PlayerLastNameCooper = _context.Players
                .Where(p => p.LastName.Equals("Cooper"))
                .ToList();
            ViewBag.PlayerFirstNameJoshua = _context.Players
                .Where(p => p.FirstName.Equals("Joshua"))
                .ToList();
            ViewBag.PlayerLastNameCooperNotJoshua = _context.Players
                .Where(p => p.LastName.Equals("Cooper"))
                .Where(p => ! p.FirstName.Equals("Joshua"))
                .ToList();
            ViewBag.PlayerWyattAlexander = _context.Players
                .Where(p => p.FirstName.Equals("Alexander") || p.FirstName.Equals("Wyatt"))
                .ToList();
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}