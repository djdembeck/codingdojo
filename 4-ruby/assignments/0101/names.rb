a = {first_name: "Michael", last_name: "Choi"}
b = {first_name: "John", last_name: "Doe"}
c = {first_name: "Jane", last_name: "Doe"}
d = {first_name: "James", last_name: "Smith"}
e = {first_name: "Jennifer", last_name: "Smith"}
names = [a, b, c, d, e]

def parse_name first_name: "first", last_name: "last"
	puts "The name is '#{first_name} #{last_name}'"      
end

puts "You have #{names.length} in the 'names' array"

names.each do |i|
	parse_name i
end