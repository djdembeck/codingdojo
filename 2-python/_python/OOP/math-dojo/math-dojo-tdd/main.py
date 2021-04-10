import unittest

class MathDojo:
	def __init__(self):
		self.result = 0
	def add(self, num, *nums):
		sum = 0
		sum += num
		if len(nums) >= 1:
			for number in nums:
				sum += number
		self.result += sum
		return self
	def subtract(self, num, *nums):
		sum = 0
		sum -= num
		if len(nums) >= 1:
			for number in nums:
				sum -= number
		# if dealing with a negative, use add so we don't end with double negative (positive)
		if sum < 0:
			self.result += sum
		else:
			self.result -= sum
		return self

class MathDojoTests(unittest.TestCase):
	def testResult(self):
		self.assertEqual(md.result, 0)
		md.result = 0 # reset result
		self.assertIsInstance(md.result, int)
	def testAdd(self):
		self.assertEqual(md.add(1,1).result, 2)
		md.result = 0 # reset result
		self.assertEqual(md.add(100,100).result, 200)
		md.result = 0 # reset result
		self.assertIsInstance(md.result, int)
	def testSubtract(self):
		self.assertEqual(md.subtract(1,1).result, -2)
		md.result = 0 # reset result
		self.assertEqual(md.subtract(100,100).result, -200)
		md.result = 0 # reset result
		self.assertIsInstance(md.result, int)

md = MathDojo()

x = md.add(2).add(2,5,1).subtract(4,5,6,7).add(7,6,5,4).subtract(3,2).subtract(5).result
print(x)

if __name__ == '__main__':
    unittest.main()