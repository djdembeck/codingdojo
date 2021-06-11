people = [
	["Danny", "Developer", "danny@example.com"],
	["Erin", "Engineer", "erin@example.com"],
	["Megan", "Manager", "megan@example.com"],
	["Otis", "Operations", "otis@example.com"],
	["Sally", "Supervisor", "sally@example.com"]
]

people.each do |person|
	puts "Inserting #{person[0]} #{person[1]} into the DB"
	User.create(first_name: person[0], last_name: person[1])
end