require_relative 'human'

class Samurai < Human
	@@count = 0

	def initialize
		super(health: 200)
		@@count += 1
	end

	def death_blow (target)
		target.health *= 0
		puts "Blood spillage noises...target, dead"
		self
	end

	def meditate
		@health = 200
		puts "Hummmmmmmmmm... Health is now #{@health}"
		self
	end

	def how_many
		puts "There's too many (#{@@count}) of them!"
		self
	end
end

hooman1 = Samurai.new
hooman2 = Samurai.new
hooman2.death_blow(hooman1).how_many