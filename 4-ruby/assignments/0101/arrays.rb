a = ["Matz", "Guido", "Dojo", "Choi", "John"]
b = [5, 6, 9, 3, 1, 2, 4, 7, 8, 10]
c = ["Dojo", 9]

# Show element
puts a.at(1)

# Delete elment VALUE
a.delete("Matz")

# Show modified array
puts a

puts b.reverse

puts b.length

puts b.sort

puts a.slice(1..4)

puts a.shuffle()

puts a.join(', ')

puts a.insert(0, "Matz")

puts b.values_at(1,3,5)