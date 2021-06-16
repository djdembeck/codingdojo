class AppleTree
	attr_reader :height, :count
	attr_accessor :age

	def initialize
		@height = rand(10..25)
		@count = rand(1..10)
	end

	def pick_apples
		@count = 0
	end

	def year_gone_by
		@age += 1
		@height += (@height * 0.10)
		@count += 2 if @age.between?(3, 10)
	end
end