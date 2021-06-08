require_relative 'mammal'

class Dog < Mammal

	def initialize (name)
		super(name)
	end

	def pet
		puts "Much petting occurs..."
		@health = self.health + 5
		self
	end

	def walk
		puts "Wobble wobble wobble"
		@health = self.health - 1
		self
	end

	def run
		puts "Majestic collar bouncing sounds"
		@health = self.health - 10
		self
	end

	def display_health
		super
	end
end

doug = Dog.new("Doug")
doug.walk.walk.walk.run.run.pet
doug.display_health