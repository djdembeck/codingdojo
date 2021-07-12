class Solution:
    def longestUniqueSubsttr(self, S):
        n = len(S)
        cur_len = 1
        max_len = 1
        prev_index = -1

        visited = {}
        for i in S:
            visited[i] -= 1

        visited[S[0]] = 0

        for i in range(1, n):
            prev_index = visited[S[i]]
            if prev_index == -1 or i - cur_len > prev_index:
                cur_len += 1
            else:
                if cur_len > max_len:
                    max_len = cur_len

                cur_len = i - prev_index

            visited[S[i]] = i

        if cur_len > max_len:
            max_len = cur_len

        return max_len
