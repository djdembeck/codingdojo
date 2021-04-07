# For this assignment, we'll add some functionality to the User class:

# make_withdrawal(self, amount) - have this method decrease the user's balance by the amount specified
# display_user_balance(self) - have this method print the user's name and account balance to the terminal
# eg. "User: Guido van Rossum, Balance: $150
# BONUS: transfer_money(self, other_user, amount) - have this method decrease the user's balance by the amount and add that amount to other other_user's balance

class User:
	def __init__(self, username, email):
		self.username = username
		self.email = email
		self.account_balance = 0
	def make_deposit(self, amount):
		self.account_balance += amount
		return self
	def make_withdrawal(self, amount):
		self.account_balance -= amount
		return self
	def display_user_balance(self):
		print(f"User: {self.username}, Balance ${self.account_balance}")
		return self
	def transfer_money(self, other_user, amount):
		print(f"Transfer from {self.username} -> {other_user.username} for the amount of ${amount}")
		self.make_withdrawal(amount)
		other_user.make_deposit(amount)
		print(f"{self.username}'s new balance: ${self.account_balance}")
		print(f"{other_user.username}'s new balance: ${other_user.account_balance}")
		return self

# The BankAccount class should have a balance. When a new BankAccount instance is created, if an amount is given, the balance of the account should initially be set to that amount; otherwise, the balance should start at $0. The account should also have an interest rate, saved as a decimal (i.e. 1% would be saved as 0.01), which should be provided upon instantiation. (Hint: when using default values in parameters, the order of parameters matters!)

class BankAccount:
	def __init__(self, int_rate = 5, balance = 0):
		self.interest_rate = int_rate / 100
		self.account_balance = balance
	def deposit(self, amount):
		self.account_balance += amount
		return self
	def withdraw(self, amount):
		self.account_balance -= amount
		return self
	def display_account_info(self):
		print(f"Balance: ${self.account_balance}; Interest rate: {int(self.interest_rate * 100)}%")
		return self
	def yield_interest(self):
		# I[nterest] = R[ate] x P[rincipal] x T[ime]
		# assume time is 1 year for now
		interest_due = self.interest_rate * self.account_balance * 1
		print(f"Interest to be added to account: {interest_due}")
		self.account_balance += interest_due
		return self

### class User calls
# make users
guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty.python.com")
leo = User("Leonardo", "leonardo@tmnt.com")

# transactions for monty
monty.make_deposit(400).make_deposit(300).make_deposit(400).make_withdrawal(100).display_user_balance()

# transactions for guido
guido.make_deposit(600).make_deposit(600).make_withdrawal(100).make_withdrawal(100).display_user_balance()

# transactions for leo
leo.make_deposit(1300).make_withdrawal(100).make_withdrawal(100).make_withdrawal(100).display_user_balance()

# transfer money
monty.transfer_money(leo, 500)
###

### class BankAccount calls
# create accounts
mikey = BankAccount(5, 100)
donny = BankAccount(10, 400)

# transactions for mikey
mikey.deposit(600).deposit(200).deposit(200).yield_interest().display_account_info()

# transactions for donny
donny.deposit(600).deposit(400).withdraw(200).withdraw(200).withdraw(200).withdraw(200).yield_interest().display_account_info()
###