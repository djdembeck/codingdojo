require_relative 'mammal'

class Lion < Mammal
	def initialize (name)
		super(name, health=170)
	end

	def eat_humans
		puts "Om nom nom nom..."
		@health = self.health + 20
		self
	end

	def attack_town
		puts "Grrrr, slash, meow..."
		@health = self.health - 50
		self
	end

	def fly
		puts "Wind blows through the lion's mane..."
		@health = self.health - 10
		self
	end

	def display_health
		puts "This is a lion"
		super
	end
end

doug = Lion.new("Leon")
doug.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.fly
doug.display_health