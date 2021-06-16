class Project
	def name=(name)
		@name = name
	end
	def name
		@name
	end
	def description=(description)
		@description = description
	end
	def description
		@description
	end
	def elevator_pitch
		"#{@name}, #{@description}"
	end
end