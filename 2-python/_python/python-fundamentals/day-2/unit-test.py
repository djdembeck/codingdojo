# import the python testing framework
import unittest
# our "unit"
# this is what we are running our test on
def reverse_list(arr):
	replace = len(arr) - 1
	for i in range(0, len(arr) - 2, 1):
		arr[i], arr[replace] = arr[replace], arr[i]
		replace -= 1

	return arr

print(reverse_list([37,2,1,-9]))
# our "unit tests"
# initialized by creating a class that inherits from unittest.TestCase
class IsEvenTests(unittest.TestCase):
	# each method in this class is a test to be run
	def testTwo(self):
		self.assertNotEqual(reverse_list([37,2,1,-9]), ([37,2,1,-9]))
	def setUp(self):
		# add the setUp tasks
		print("running setUp")
	# any task you want run after the tests are executed, put them in the tearDown method
	def tearDown(self):
		# add the tearDown tasks
		print("running tearDown tasks")
if __name__ == '__main__':
    unittest.main() # this runs our tests

