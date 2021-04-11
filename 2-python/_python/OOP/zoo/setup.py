import random

class Animal:
	def __init__(self, name, age_max, health_max, happiness_max):
		self.name = name
		self.age = self.set_age(age_max)
		self.health = self.set_health(health_max)
		self.happiness = self.set_happiness(happiness_max)
	def rand_range(self, max):
		rand_result = random.randrange(1, max)
		return rand_result
	def set_age(self, max):
		age = self.rand_range(max)
		return age
	def set_health(self, max):
		health = self.rand_range(max)
		return health
	def set_happiness(self, max):
		happiness = self.rand_range(max)
		return happiness
	def feed(self, type):
		
		return self
		# increases health and happiness by 10.

class Lion(Animal):
	def __init__(self, name):
		self.account = Animal(name, 10, 10, 10)
	def display_info(self):
		print(f"Name: {self.account.name}; Age: {self.account.age}; Health: {self.account.health}; Happiness: {self.account.happiness}")
		return self

		
class Tiger(Animal):
	def __init__(self, name):
		self.account = Animal(name, 10, 10, 10)
	def display_info(self):
		print(f"Name: {self.account.name}; Age: {self.account.age}; Health: {self.account.health}; Happiness: {self.account.happiness}")
		return self

class Bear(Animal):
	def __init__(self, name):
		self.account = Animal(name, 10, 10, 10)
	def display_info(self):
		print(f"Name: {self.account.name}; Age: {self.account.age}; Health: {self.account.health}; Happiness: {self.account.happiness}")
		return self