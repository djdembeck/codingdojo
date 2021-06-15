class Project
	attr_accessor :name, :description, :owner, :task_list

	def initialize (name, description, owner)
		@name = name
		@description = description
		@owner = owner
		@task_list = []
	end

	def elevator_pitch
		"#{@name}, #{@description}"
	end

	def add_tasks (task)
		@task_list << task
		self
	end

	def tasks
		@task_list.each do |task|
			"#{task}"
		end
	end
end

# project1 = Project.new("Project 1", "Description 1")
# puts project1.name # => "Project 1"
# project1.elevator_pitch  # => "Project 1, Description 1"