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
		self.result += sum
		return self
md = MathDojo()

x = md.add(2).add(2,5,1).subtract(4,5,6,7).add(7,6,5,4).subtract(3,2).subtract(5).result
print(x)