package leetcode_1

func TwoSum(nums []int, target int) [2]int {
	m := make(map[int]int)
	for i, num := range nums {
		val, ok := m[num]
		if ok {
			return [2]int{val, i}
		}
		complement := target - num
		m[complement] = i
	}
	return [2]int{}
}
