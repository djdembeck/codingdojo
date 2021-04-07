import unittest

### reverseList - Write a function that reverses the values in the list (without creating a temporary array).
def reverseList(arr):
	replace = len(arr) - 1
	for i in range(0, len(arr) - 2, 1):
		arr[i], arr[replace] = arr[replace], arr[i]
		replace -= 1

	return arr

class reverseListTests(unittest.TestCase):
	def testOne(self):
		self.assertNotEqual(reverseList([37,2,1,-9]), ([37,2,1,-9]))
		self.assertEqual(reverseList([37,2,1,-9]), ([-9, 1, 2, 37]))
	def testTwo(self):
		self.assertIsNot(reverseList([37,2,1,-9]), "")
		self.assertIsNotNone(reverseList([37,2,1,-9]))
		print(f"Finished tests for {self.__class__.__name__}")

### isPalindrome - Write a function that checks whether the given word is a palindrome (a word that spells the same backward).

def isPalindrome(word):
	reverse = ''.join(reversed(word))
	if (word == reverse):
		return True

class isPalindromeTests(unittest.TestCase):
	def testOne(self):
		self.assertTrue(isPalindrome("racecar"))
		self.assertFalse(isPalindrome("rabcr"))
		self.assertIsNot(isPalindrome("racecar"), "")
		self.assertIsNotNone(isPalindrome("racecar"))
	def testTwo(self):
		self.assertTrue(isPalindrome("rotator"))
		self.assertFalse(isPalindrome("rotators"))
		self.assertIsNot(isPalindrome("rotator"), "")
		self.assertIsNotNone(isPalindrome("rotator"))
		print(f"Finished tests for {self.__class__.__name__}")

### coins - Write a function that determines how many quarters, dimes, nickels, and pennies to give to a customer for a change where you minimize the number of coins you give out.

### BONUS - factorial - Write a recursive function that returns the factorial of a given number. Remember that the factorial of a number is the product of all the numbers between 1 and the given number (eg. 4! = 4*3*2*1).

### BONUS - fibonacci - Write a recursive function that accepts a number, n, and returns the nth Fibonacci number from the sequence. The first two Fibonacci numbers are 0 and 1. Every number after that is calculated by adding the previous 2 numbers from the sequence. (i.e. 0, 1, 1, 2, 3, 5, 8, 13, 21 ...)

if __name__ == '__main__':
    unittest.main()