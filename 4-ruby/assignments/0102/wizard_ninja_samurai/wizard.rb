require_relative 'human'

class Wizard < Human

	def initialize
		super(intelligence: 25, health: 50)
	end

	def heal
		@health += 10
		puts "Magical healing noises... Health is now #{@health}"
		self
	end

	def fireball (target)
		target.health -= 20
		puts "Blllldddddd....fireball. Target health is now #{target.health}"
		self
	end
end

hooman1 = Wizard.new
hooman2 = Wizard.new
hooman2.fireball(hooman1).heal