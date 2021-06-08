# def new_user greeting="Welcome", first_name: "first", last_name: "last"
# 	puts "#{greeting}, #{first_name} #{last_name}"      
# end
# our_user = {first_name: "Oscar", last_name: "Vazquez"}
# new_user "Hello", our_user # => Hello, Oscar Vazquez

our_hash = {first_name: "Coding", last_name: "Dojo"}
p our_hash.empty?
our_hash.delete(:first_name)
p our_hash.key?(:first_name)
p our_hash.has_value?("Dojo")