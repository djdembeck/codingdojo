# we require 'open-uri' to request the html files
require 'open-uri'
teams = [
	["Atlanta Hawks", "Skyhawk", "Philips Arena"],
	["Boston Celtics", "Lucky the Leprechaun", "TD Garden"],
	["Brooklyn Nets", "BrooklyKnight", "Barclays Center"],
	["Charlotte Hornets", "Hugo the Hornet", "Spectrum Center"],
	["Chicago Bulls", "Benny the Bull", "United Center"],
	["Cleveland Cavaliers", "Moondog", "Quicken Loans Arena"],
	["Dallas Mavericks", "Champ", "American Airlines Center"],
	["Denver Nuggets", "Rocky the Mountain Lion", "Pepsi Center"],
	["Detroit Pistons", "Hooper", "The Palace of Auburn Hills"],
	["Golden State Warriors", "Thunder", "Oracle Arena"],
	["Houston Rockets", "Clutch", "Toyota Center"],
	["Indiana Pacers", "Boomer the Panther", "Bankers Life Fieldhouse"],
	["Los Angeles Clippers", "Chuck", "Staples Center"],
	["Los Angeles Lakers", "Jack Nicholson", "Staples Center"],
	["Memphis Grizzlies", "Griz", "FedExForum"],
	["Miami Heat", "Burnie", "American Airlines Arena"],
	["Milwaukee Bucks", "Bango", "BMO Harris Bradley Center"],
	["Minnesota Timberwolves", "Crunch the Wolf", "Target Center"],
	["New Orleans Pelicans", "Pierre the Pelican", "Smoothie King Center"],
	["New York Knicks", "Spike Lee", "Madison Square Garden"],
	["Oklahoma City Thunder", "Rumble the Bison", "Chesapeake Energy Arena"],
	["Orlando Magic", "Stuff the Magic Dragon", "Amway Center"],
	["Philadelphia 76ers", "Franklin the Dog", "Wells Fargo Center Philadelphia"],
	["Phoenix Suns", "The Suns Gorilla", "Talking Stick Resort Arena"],
	["Portland Trail Blazers", "Blaze the Trail Cat", "Moda Center"],
	["Sacramento Kings", "Slamson the Lion", "Golden 1 Center"],
	["San Antonio Spurs", "The Coyote", "AT&T Center"],
	["Toronto Raptors", "Raptor", "Air Canada Centre"],
	["Utah Jazz", "Jazz Bear", "Vivint Smart Home Arena"],
	["Washington Wizards", "G. Wiz", "Verizon Center"]
]
# Here, we are using the Nokogiri gem (already comes with Rails), to scrape the ESPN website for the list of players.
# For more information on Nokogiri, you can go to their documentation or visit https://www.nokogiri.org/
atlanta_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/atl/atlanta-hawks")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
boston_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/bos/boston-celtics")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
brooklyn_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/bkn/brooklyn-nets")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
charlotte_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/cha/charlotte-hornets")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
chicago_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/chi/chicago-bulls")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
cleveland_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/cle/cleveland-cavaliers")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
dallas_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/dal/dallas-mavericks")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
denver_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/den/denver-nuggets")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
detroit_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/det/detroit-pistons")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
warriors_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/gs/golden-state-warriors")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
houston_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/hou/houston-rockets")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
indiana_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/ind/indiana-pacers")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
clippers_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/lac/la-clippers")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
lakers_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/lal/los-angeles-lakers")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
memphis_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/mem/memphis-grizzlies")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
miami_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/mia/miami-heat")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
milwaukee_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/mil/milwaukee-bucks")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
minnesota_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/min/minnesota-timberwolves")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
nola_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/no/new-orleans-pelicans")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
knicks_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/ny/new-york-knicks")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
okc_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/okc/oklahoma-city-thunder")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
orlando_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/orl/orlando-magic")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
phili_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/phi/philadelphia-76ers")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
phoenix_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/phx/phoenix-suns")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
portland_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/por/portland-trail-blazers")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
sacramento_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/sac/sacramento-kings")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
spurs_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/sa/san-antonio-spurs")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
toronto_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/tor/toronto-raptors")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
utah_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/utah/utah-jazz")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
washington_players = Nokogiri::HTML(open("https://www.espn.com/nba/team/roster/_/name/wsh/washington-wizards")).css('.Table__TD:not(.Table__TD--headshot) a.AnchorLink')
players = [
	atlanta_players,
	boston_players,
	brooklyn_players,
	charlotte_players,
	chicago_players,
	cleveland_players,
	dallas_players,
	denver_players,
	detroit_players,
	warriors_players,
	houston_players,
	indiana_players,
	clippers_players,
	lakers_players,
	memphis_players,
	miami_players,
	milwaukee_players,
	minnesota_players,
	nola_players,
	knicks_players,
	okc_players,
	orlando_players,
	phili_players,
	phoenix_players,
	portland_players,
	sacramento_players,
	spurs_players,
	toronto_players,
	utah_players,
	washington_players
]
players.each_with_index do |roster, index|
	Team.create(name: teams[index][0], mascot: teams[index][1], stadium: teams[index][2])
	roster.each do |player|
		Team.last.players.create(name: player.text)
	end
end 