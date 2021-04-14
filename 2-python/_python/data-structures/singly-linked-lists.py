class SLNode:
	def __init__(self, val):
		self.value = val
		self.next = None

class SList:
	def __init__(self):
		self.head = None
	def add_to_front(self, val):
		new_node = SLNode(val)
		current_head = self.head
		new_node.next = current_head
		self.head = new_node
		return self
	def add_to_back(self, val):
		if self.head == None:
			self.add_to_front(val)
			return self
		new_node = SLNode(val)
		runner = self.head
		while (runner.next != None):
			runner = runner.next
		runner.next = new_node
		return self
	def print_values(self):
		runner = self.head
		while (runner != None):
			print(runner.value)
			runner = runner.next
		return self
	def remove_from_front(self):
		new_head = self.head.next
		self.head = new_head
		return self
		# Technically assignment asks to return first nodes value, but we want chaining
	def remove_from_back(self):
		runner = self.head
		while (runner != None):
			if (runner.next != None):
				store_prev = runner
			runner = runner.next
		self.tail = store_prev
		store_prev.next = None
		return self

x = SList()
x.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").print_values().remove_from_front().remove_from_back().print_values()