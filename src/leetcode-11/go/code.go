package main

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func MaxArea(height []int) int {
	var left, maxVol int
	right := len(height) - 1

	for right > left {
		w := right - left
		h := min(height[left], height[right])
		maxVol = max(w*h, maxVol)
		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}

	return maxVol
}
