people = [
	["Danny", "Developer", "Python"],
	["Erin", "Engineer", "Ruby"],
	["Megan", "Manager", "Javascript"],
	["Otis", "Operations", "C#"],
	["Sally", "Supervisor", "Java"]
]

posts = [
	["A Walk In The Park", "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass."]
]

people.each do |person|
	puts "Inserting #{person[0]} #{person[1]} into the DB"
	thisuser = User.create(first_name: person[0], last_name: person[1], fav_lang: person[2])
	posts.each do |post|
		puts "Inserting #{post[0]} into the DB"
		Post.create(title: post[0], content: post[1], user:thisuser)
	end
end