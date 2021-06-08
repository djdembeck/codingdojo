class MathDojo
	attr_accessor :num
	def initialize
		@num = 0
	end

	def add *params
		params.each do |top_param|
			if top_param.class != Array
				@num = @num + top_param
			else
				top_param.each do |param|
					@num = @num + param
				end
			end
		end
		self
	end

	def subtract *params
		params.each do |top_param|
			if top_param.class != Array
				@num = @num - top_param
			else
				top_param.each do |param|
					@num = @num - param
				end
			end
		end
		self
	end

	def result
		puts "#{@num}"
	end
end

challenge1 = MathDojo.new.add(2).add(2, 5).subtract(3, 2).result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15