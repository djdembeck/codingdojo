people = [
	["Danny", "Developer", "dev"],
	["Erin", "Engineer", "eng"],
	["Megan", "Manager", "man"],
	["Otis", "Operations", "ops"],
	["Sally", "Supervisor", "sup"]
]

posts = [
	["A Walk In The Park", "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."],
	["Happy Accidents", "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."],
	["Walking Slowly", "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"],
	["A Peach and A Pair", "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."],
	["Falling In Like", "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."]
]

people.each do |person|
	puts "Inserting #{person[0]} #{person[1]} into the DB"
	thisuser = User.create(first_name: person[0], last_name: person[1], username: person[2])
	posts.each do |post|
		puts "Inserting #{post[0]} into the DB"
		Post.create(content: post[1], user:thisuser)
	end
end