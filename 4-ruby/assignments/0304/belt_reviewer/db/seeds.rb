people = [
	["Danny", "Developer", "danny@example.com", "Dallas", "TX"],
	["Erin", "Engineer", "erin@example.com", "Seattle", "WA"],
	["Megan", "Manager", "megan@example.com", "Los Angeles", "CA"],
	["Otis", "Operations", "otis@example.com", "Atlanta", "GA"],
	["Sally", "Supervisor", "sally@example.com", "Miami", "FL"]
]

people.each do |person|
	puts "Inserting #{person[0]} #{person[1]} into the DB"
	User.create(first_name: person[0], last_name: person[1], email: person[2], password: person[2], city: person[3], state: person[4])
end