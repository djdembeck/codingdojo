def findSubArraySum(Arr, N, k):
    total_sum = 0
    while N >= 0:
        sum = 0
        for i in range(N, len(Arr)):
            sum += Arr[i]
            if sum == k:
                total_sum += 1
        N -= 1
    return total_sum


N = 88
Arr = [-6, 2, 4, 9, 2, 8, 9, -1, 5, 2, 9, 4, 5, 7, -8, 1, 6, 10, 7, 5, 4, -8, 3, 2, 8, 9, 7, 9, -8, 1, 1, 6, 1, 1, 2, -2, 8, 4, 3, 5, 6, 1, -5, 1, 6, 9, 2, 7, 8, -6, 8, 4, 7, 6, 2, 2, -9, 1, 1, 7, 9, 2, 6, -2, 10, 4, 7, 9, 1, 5, -9, 5, 4, 10, 1, 6, 1, -5, 8, 2, 9, 3, 5, 5, -2, 10, 9, 10]
k = 40
findSubArraySum(Arr, N, k)
