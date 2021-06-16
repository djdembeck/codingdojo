require_relative 'bankaccount'

RSpec.describe BankAccount do
	before(:each) do 
		@charles = BankAccount.new
		@charles.deposit("checking", 100).deposit("saving", 100).withdraw("checking", 1)

		@jake = BankAccount.new
		@jake.deposit("checking", 100).deposit("saving", 10).withdraw("checking", 90)
	end

	it 'has a getter for checking account balance' do
		expect(@charles.chk_balance).to eq(99)
	end

	it 'has a getter for checking account balance' do
		expect(@charles.total_balance()).to eq(199)
	end

	it 'has a getter for withdrawl balance' do
		@charles.withdraw("checking", 1)
		expect(@charles.total_balance()).to eq(198)
	end

	it "can't overwithdrawl account" do 
		expect{@charles.withdraw("checking", 1001)}.to raise_error(ArgumentError)
	end

	it "can't list total number of accounts" do
		expect{@charles.count}.to raise_error(NoMethodError)
	end

	it "can't edit interest_rate" do
		expect{@charles.count}.to raise_error(NoMethodError)
	end

	it "can't edit interest_rate" do
		expect{@charles.interest_rate = 0}.to raise_error(NoMethodError)
	end
end