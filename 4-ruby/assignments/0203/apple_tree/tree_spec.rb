require_relative 'tree'
RSpec.describe AppleTree do
	context "under 3 years" do
		before(:each) do
			@tree = AppleTree.new
			@tree.age = 1
		end
		it "has a getter and setter for age attribute" do
			expect(@tree.age).to eq(1)
		end

		it "has a getter for height attribute" do
			expect(@tree.height).to be_kind_of(Numeric)
		end

		it "can't set height attribute" do
			expect{@tree.height = 1}.to raise_error(NoMethodError)
		end

		it "has a getter for count attribute" do
			expect(@tree.count).to be_kind_of(Numeric)
		end

		it "can't set count attribute" do
			expect{@tree.count = 1}.to raise_error(NoMethodError)
		end

		it "tree age increased in year_gone_by" do
			new_age = @tree.age + 1
			@tree.year_gone_by
			expect(@tree.age).to eq(new_age)
		end

		it "height increased in year_gone_by" do
			new_height = @tree.height + (@tree.height * 0.10)
			@tree.year_gone_by
			expect(@tree.height).to eq(new_height)
		end

		it "can't increase apple count year_gone_by" do
			new_count = @tree.count
			@tree.year_gone_by
			expect(@tree.count).to eq(new_count)
		end

		it "apple count reset by pick_apples" do
			@tree.pick_apples
			expect(@tree.count).to eq(0)
		end
	end

	context "between 3 and 7 years" do
		before(:each) do
			@tree = AppleTree.new
			@tree.age = 3
		end

		it "apple count increased in year_gone_by" do
			apple_count = @tree.count + 2
			@tree.year_gone_by
			expect(@tree.count).to eq(apple_count)
		end
	end

	context "above 10 years" do
		before(:each) do
			@tree = AppleTree.new
			@tree.age = 11
		end

		it "can't increase apple count year_gone_by" do
			new_count = @tree.count
			@tree.year_gone_by
			expect(@tree.count).to eq(new_count)
		end
	end
end