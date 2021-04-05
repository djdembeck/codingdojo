#1
def a():
	return 5
print(a())

# returns 5, so print 5

#2
def a():
	return 5
print(a()+a())

# function called 2x, 5+5
# 10

#3
def a():
	return 5
	return 10
print(a())

# If this is anything like JS, only first return is called
# 5

#4
def a():
	return 5
	print(10)
print(a())

# same as above, return terminates before print
# 5

#5
def a():
	print(5)
x = a()
print(x)

# print, not return, so prints 5 2x
# 5
# 5

#6
def a(b,c):
	print(b+c)
print(a(1,2) + a(2,3))

# hmm, no return, so it's just printing inside the function?
# 3
# 5

#7
def a(b,c):
	return str(b)+str(c)
print(a(2,5))

# 2 5

#8
def a():
	b = 100
	print(b)
	if b < 10:
		return 5
	else:
		return 10
	return 7
print(a())

# 

#9
def a(b,c):
	if b<c:
		return 7
	else:
		return 14
	return 3
print(a(2,3))
print(a(5,3))
print(a(2,3) + a(5,3))

#10
def a(b,c):
	return b+c
	return 10
print(a(3,5))

#11
b = 500
print(b)
def a():
	b = 300
	print(b)
print(b)
a()
print(b)

#12
b = 500
print(b)
def a():
	b = 300
	print(b)
	return b
print(b)
a()
print(b)

#13
b = 500
print(b)
def a():
	b = 300
	print(b)
	return b
print(b)
b=a()
print(b)

#14
def a():
	print(1)
	b()
	print(2)
def b():
	print(3)
a()

#15
def a():
	print(1)
	x = b()
	print(x)
	return 10
def b():
	print(3)
	return 5
y = a()
print(y)