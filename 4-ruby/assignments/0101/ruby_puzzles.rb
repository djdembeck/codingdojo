# Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. Print the sum of all numbers in the array. Also have the function return an array that only include numbers that are greater than 10 (e.g. when you pass the array above, it should return an array with the values of 13,25,32 - hint: use reject or find_all method)

def greater_10 arr
	puts "Sum: #{arr.reduce(0, :+)}"
	p arr.find_all { |i| i > 10 }
end
greater_10 [3,5,1,2,7,9,8,13,25,32]

# Create an array with the following values: John, KB, Oliver, Cory, Matthew, Christopher. Shuffle the array and print the name of each person. Have the program also return an array with names that are longer than 5 characters.

def shuffle_names arr
	puts arr.shuffle!
	p arr.find_all { |i| i.length > 5}
end
shuffle_names ["John", "KB", "Oliver", "Cory", "Matthew", "Christopher"]

# Create an array that contains all 26 letters in the alphabet (this array must have 26 values). Shuffle the array and display the last letter of the array. Have it also display the first letter of the array. If the first letter in the array is a vowel, have it display a message.

def shuffle_alphabet
	alphabet = ('a'..'z').to_a
	puts alphabet.shuffle!.last, alphabet.first
	puts "Tis' a vowel!" if alphabet.first.match(/a|e|i|o|u/)
end
shuffle_alphabet

# Generate an array with 10 random numbers between 55-100.

rand_arr = Array.new(10) { rand(55..100) }
p rand_arr

# Generate an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value
p rand_arr.sort!, rand_arr.min, rand_arr.max

# Create a random string that is 5 characters long (hint: (65+rand(26)).chr returns a random character)
puts Array.new(5) { (65+rand(26)).chr }.join

# Generate an array with 10 random strings that are each 5 characters long
p Array.new(10) { Array.new(5) { (65+rand(26)).chr }.join }