class Human
	attr_accessor :strength, :intelligence, :stealth, :health

	def initialize (strength: 3, intelligence: 3, stealth: 3, health: 100)
		@strength = strength
		@intelligence = intelligence
		@stealth = stealth
		@health = health
	end

	def attack (target)
		if target.class.ancestors.include?(Human)
			puts "Tis' but a scratch"
			target.health -= 10
			puts "Target health is now: #{target.health}"
		else
			puts "Not human ancestor"
		end
	end
end