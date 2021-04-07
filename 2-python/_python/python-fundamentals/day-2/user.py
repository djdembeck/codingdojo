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
	def make_withdrawal(self, amount):
		self.account_balance -= amount
	def display_user_balance(self):
		print(f"User: {self.username}, Balance ${self.account_balance}")
	def transfer_money(self, other_user, amount):
		print(f"Transfer from {self.username} -> {other_user.username} for the amount of ${amount}")
		self.make_withdrawal(amount)
		other_user.make_deposit(amount)
		print(f"{self.username}'s new balance: ${self.account_balance}")
		print(f"{other_user.username}'s new balance: ${other_user.account_balance}")

# make users
guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty.python.com")
leo = User("Leonardo", "leonardo@tmnt.com")

# transactions for monty
monty.make_deposit(400)
monty.make_deposit(300)
monty.make_deposit(400)
monty.make_withdrawal(100)
monty.display_user_balance()

# transactions for guido
guido.make_deposit(600)
guido.make_deposit(600)
guido.make_withdrawal(100)
guido.make_withdrawal(100)
guido.display_user_balance()

# transactions for leo
leo.make_deposit(1300)
leo.make_withdrawal(100)
leo.make_withdrawal(100)
leo.make_withdrawal(100)
leo.display_user_balance()

# transfer money
monty.transfer_money(leo, 500)