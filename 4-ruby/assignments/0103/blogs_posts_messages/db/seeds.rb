people = [
	["Danny", "Developer", "danny@example.com"],
	["Erin", "Engineer", "erin@example.com"],
	["Megan", "Manager", "megan@example.com"],
	["Otis", "Operations", "otis@example.com"],
	["Sally", "Supervisor", "sally@example.com"]
]

people.each do |person|
	puts "Inserting #{person[0]} #{person[1]} into the DB"
	User.create(first_name: person[0], last_name: person[1], email_address: person[2])
end

blogs = [
	["Apartment Therapy", "Apartment Therapy is a blog focusing on interior design. It was launched by Maxwell Ryan in 2001. Ryan is an interior designer who turned to blogging (using the moniker “the apartment therapist”). The blog has reached 20 million followers and has expanded into a full-scale media company."],
	["Say Yes", "Say Yes is an award-winning blog created by Liz Stanley in 2006. Although it could be classified as a mom blog as well, since Liz is a mother of three, it goes beyond that, offering useful advice about other topics, including food, and travel."],
	["Bright Bazaar", "Bright Bazaar was created by Will Taylor, a journalist-turned-interior designer in 2009. Apart from wonderful home tours and design findings, Will shares other exciting details about his lifestyle, including his outfits, recipes, and life in New York City."],
	["A Cup of Jo", "A weekend hobby for Joanna Goddard turned into a full-time job. She started A Cup of Jo in 2007 and became a superstar lifestyle blogger. In fact, the site is barely a personal blog anymore, as Jo now has a team of professional writers who share her interests, such as style, design, food, and motherhood."],
	["Megan the Vegan Mom", "Megan, the founder of “Megan the Vegan Mom”, blogs about her daily life as a vegan mom. She is a strong advocate of veganism as a former veterinarian who shares an immense love for pets. Along with topics about motherhood, Megan likes to write about parties, lifestyle, and fashion."]
]

posts = [
	["A Walk In The Park", "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."],
	["Happy Accidents", "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."],
	["Walking Slowly", "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"],
	["A Peach and A Pair", "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."],
	["Falling In Like", "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."]
]

blogs.each do |blog|
	puts "Inserting #{blog[0]} #{blog[1]} into the DB"
	thisblog = Blog.create(name: blog[0], description: blog[1])
	posts.each do |post|
		puts "Inserting #{post[0]} #{post[1]} into the DB"
		Post.create(title: post[0], content: post[1], blog:thisblog)
	end
end