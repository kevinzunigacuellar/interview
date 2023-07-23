package code

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}


func LengthOfLongestSubstring(s string) int {
	var left, maxLen int
	m := make(map[byte]int)

	for right := 0; right < len(s); right++ {
		ch := s[right]
		val, ok := m[ch]

		if ok {
			left = val + 1
		}

		m[ch] = right
		maxLen = max(maxLen, right-left+1)
		}

	return maxLen
	}

	