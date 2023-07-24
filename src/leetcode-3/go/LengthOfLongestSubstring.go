package leetcode_3

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func LengthOfLongestSubstring(s string) int {
	m := make(map[rune]int)
	var left, maxLen int
	for right, c := range s {
		val, ok := m[c]
		if ok && val >= left { // only update left if the repeated char is in the current window
			left = val + 1
		}
		m[c] = right
		maxLen = max(maxLen, right-left+1)
	}

	return maxLen
}
