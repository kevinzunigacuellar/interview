package main

func TwoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, num := range nums {
		val, ok := m[num]
		if ok {
			return []int{val, i}
		}
		complement := target - num
		m[complement] = i
	}
	return nil
}
