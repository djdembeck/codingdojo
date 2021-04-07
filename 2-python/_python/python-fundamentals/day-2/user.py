# TODO: SENSEI BONUS: Allow a user to have multiple accounts; update methods so the user has to specify which account they are withdrawing or depositing to

class User:
	def __init__(self, username, email):
		self.username = username
		self.email = email
		self.account = BankAccount(int_rate=5, balance=0)
	def make_deposit(self, amount):
		self.account.deposit(amount)
		return self
	def make_withdrawal(self, amount):
		self.account.withdraw(amount)
		return self
	def display_user_balance(self):
		print(f"User: {self.username}, Balance ${self.account.account_balance}")
		return self
	def transfer_money(self, other_user, amount):
		print(f"Transfer from {self.username} -> {other_user.username} for the amount of ${amount}")
		self.make_withdrawal(amount)
		other_user.make_deposit(amount)
		print(f"{self.username}'s new balance: ${self.account.account_balance}")
		print(f"{other_user.username}'s new balance: ${other_user.account.account_balance}")
		return self

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