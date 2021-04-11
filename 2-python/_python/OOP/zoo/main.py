from setup import Animal, Bear, Lion, Tiger

class Zoo:
	def __init__(self, zoo_name):
		self.animals = []
		self.name = zoo_name
	def add_bear(self, name):
		self.animals.append( Bear(name) )
	def add_lion(self, name):
		self.animals.append( Lion(name) )
	def add_tiger(self, name):
		self.animals.append( Tiger(name) )
	def feed_animal(self):
		for animal in self.animals:
			animal.feed_me()
	def print_all_info(self):
		print("-"*30, self.name, "-"*30)
		for animal in self.animals:
			animal.display_info()

zoo1 = Zoo("David's Zoo")
zoo1.add_lion("Nala")
zoo1.add_lion("Simba")
zoo1.add_bear("Rajah")
zoo1.add_tiger("Shere Khan")
zoo1.print_all_info()
zoo1.feed_animal()
zoo1.print_all_info()