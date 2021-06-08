class Mammal
	attr_accessor :name, :health
	def initialize (name)
		@health = 150
		@name = name
	end

	def display_health
		puts "#{@name}'s health is #{@health}"
	end
end