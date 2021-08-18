using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
            ViewBag.TeamsAtlantic = _context.Teams
                .Include(league => league.CurrLeague)
                .Where(t => t.CurrLeague.Name.Equals("Atlantic Soccer Conference"))
                .ToList();
            ViewBag.PlayersBoston = _context.Players
                .Include(p => p.CurrentTeam)
                .Where(p => p.CurrentTeam.TeamName.Equals("Penguins") && p.CurrentTeam.Location.Equals("Boston"))
                .ToList();
            ViewBag.PlayersCollegiateBaseball = _context.Players
                .Include(p => p.CurrentTeam.CurrLeague)
                .Where(p => p.CurrentTeam.CurrLeague.Name.Equals("International Collegiate Baseball Conference"))
                .ToList();
            ViewBag.FootballLopez = _context.Players
                .Include(p => p.CurrentTeam.CurrLeague)
                .Where(p => p.CurrentTeam.CurrLeague.Name.Equals("American Conference of Amateur Football") && p.LastName.Equals("Lopez"))
                .ToList();
            ViewBag.AllFootball = _context.Players
                .Include(p => p.CurrentTeam.CurrLeague)
                .Where(p => p.CurrentTeam.CurrLeague.Name.Contains("Football"))
                .ToList();
            ViewBag.TeamWithSophia = _context.Teams
                .Include(p => p.CurrentPlayers)
                .Where(p => p.CurrentPlayers.Any(p => p.FirstName.Equals("Sophia")))
                .ToList();
            ViewBag.LeagueWithSophia = _context.Leagues
                .Include(p => p.Teams)
                    .ThenInclude(x => x.CurrentPlayers)
                .Where(p => p.Teams.Any(y => y.CurrentPlayers.Any(p => p.FirstName.Equals("Sophia"))))
                .ToList();
            ViewBag.PlayerNotWashington = _context.Players
                .Include(p => p.CurrentTeam)
                .Where(p => ! p.CurrentTeam.TeamName.Equals("Washington Roughriders"))
                .ToList();
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            ViewBag.SamEvans = _context.Teams
                .Include(team => team.AllPlayers)
                    .ThenInclude(player => player.PlayerOnTeam)
                .Where(p => p.AllPlayers.Any(p => p.PlayerOnTeam.FirstName.Equals("Samuel") && p.PlayerOnTeam.LastName.Equals("Evans")))
                .ToList();
            ViewBag.TigerCats = _context.Players
                .Include(player => player.AllTeams)
                    .ThenInclude(player => player.TeamOfPlayer)
                .Where(p => p.AllTeams.Any(p => p.TeamOfPlayer.TeamName.Equals("Tiger-Cats")))
                .ToList();
            ViewBag.WhicitaVikings = _context.Players
                .Include(player => player.AllTeams)
                    .ThenInclude(player => player.TeamOfPlayer)
                .Where(p => p.AllTeams.Any(x => x.TeamOfPlayer.TeamName.Equals("Vikings") && ! x.TeamOfPlayer.CurrentPlayers.Contains(p)))
                .ToList();
            ViewBag.JacobGray = _context.Teams
                .Include(player => player.AllPlayers)
                    .ThenInclude(player => player.PlayerOnTeam)
                .Where(x => x.AllPlayers.Any(y => y.PlayerOnTeam.FirstName.Equals("Jacob") && y.PlayerOnTeam.LastName.Equals("Gray") && ! x.TeamName.Equals("Colts")))
                .ToList();
            ViewBag.Joshuas = _context.Players
                .Include(player => player.AllTeams)
                    .ThenInclude(player => player.TeamOfPlayer.CurrLeague)
                .Where(x => x.AllTeams.Any(y =>  y.TeamOfPlayer.CurrLeague.Name.Equals("Atlantic Federation of Amateur Baseball Players")))
                .ToList();
            ViewBag.TwelveOrMore = _context.Teams
                .Include(player => player.AllPlayers)
                    .ThenInclude(player => player.PlayerOnTeam)
                .Where(x => x.AllPlayers.Count >=12 )
                .ToList();
            ViewBag.PlayerTeamCount = _context.Players
                .Include(player => player.AllTeams)
                    .ThenInclude(player => player.TeamOfPlayer.CurrLeague)
                .OrderByDescending(x => x.AllTeams.Count)
                .ToList();
            return View();
        }
    }
}