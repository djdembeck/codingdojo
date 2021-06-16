require 'securerandom'

class BankAccount
	attr_accessor :uuid, :chk_balance, :save_balance
	@@count = 0

	def initialize
		@uuid = SecureRandom.hex(10)
		@chk_balance = 0
		@save_balance = 0
		@interest_rate = 0.01
		@@count += 1
	end

	def checking_balance
		@chk_balance
	end

	def saving_balance
		@save_balance
	end

	def total_balance
		@total = @chk_balance + @save_balance
	end

	def account_information
		puts "Account number: #{@uuid}"
		puts "Total balance: #{self.total_balance}"
		puts "Checking balance: #{self.checking_balance}"
		puts "Savings balance #{self.saving_balance}"
		puts "Interest rate: #{@interest_rate}"
	end

	def deposit (acct, amount)
		if acct == "checking"
			@chk_balance += amount
		elsif acct == "saving"
			@save_balance += amount
		end
		self
	end

	def withdraw (acct, amount)
		if acct == "checking"
			new_amt = self.chk_balance - amount
			unless new_amt <= 0
				@chk_balance = new_amt
			else
				raise ArgumentError, "Insufficient funds to withraw"
			end
		elsif acct == "saving"
			new_amt = self.save_balance - amount
			unless new_amt <= 0
				@save_balance = new_amt
			else
				raise ArgumentError, "Insufficient funds to withraw"
			end
		end
		self
	end

	def account_count
		puts @@count
	end
end

# charles = BankAccount.new
# charles.deposit("checking", 100).deposit("saving", 100).withdraw("checking", 1).account_information

# jake = BankAccount.new
# jake.deposit("checking", 100).deposit("saving", 10).withdraw("checking", 90).account_information