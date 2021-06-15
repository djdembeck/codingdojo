require_relative 'project'
RSpec.describe Project do  
	before(:each) do 
		@project1 = Project.new('Project 1', 'description 1', "John Doe")
		@project2 = Project.new('Project 2', 'description 2', "Jane Doe")
		@project1.add_tasks("Deez nuts")
		# Add tasks
		@project1.tasks()
	end
	it 'has a getter and setter for name attribute' do
		@project1.name = "Changed Name"
		expect(@project1.name).to eq("Changed Name")
	end
	it 'has a getter and setter for owner attribute' do
		@project1.owner = "George Washington"
		expect(@project1.owner).to eq("George Washington")
	end
	it 'has a getter for tasks attribute' do
		expect(@project1.task_list[0]).to eq("Deez nuts")
	end
	it 'has correct length for tasks array' do
		expect(@project1.task_list.length).to be < 2
	end
	it 'has a method elevator_pitch to explain name and description' do
		expect(@project1.elevator_pitch).to eq("Project 1, description 1")
		expect(@project2.elevator_pitch).to eq("Project 2, description 2")
	end
end