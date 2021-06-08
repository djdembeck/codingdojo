require_relative 'human'

class Ninja < Human

	def initialize
		super(stealth: 150)
	end

	def steal (target)
		attack(target)
		@health += 10
		self
	end

	def get_away
		@health -= 15
		puts "Naruto speedrun noises...Health is now #{@health}"
		self
	end
end

hooman1 = Ninja.new
hooman2 = Ninja.new
hooman2.steal(hooman1).get_away