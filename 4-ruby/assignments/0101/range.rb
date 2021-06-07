# Make array of random numbers https://stackoverflow.com/a/48957944/15412097
nums = Array.new(50) { rand(1..100) }

# .include
puts "Yeth, thith number exithtth" if nums.include?(75)

# .last
puts nums.last

# .max
puts nums.max

# .min
puts nums.min