package main

import "testing"

func TestTwoSum(t *testing.T) {
	t.Run("Example 1", func(t *testing.T) {
		nums := []int{2, 7, 11, 15}
		target := 9
		want := []int{0, 1}
		got := TwoSum(nums, target)
		if got[0] != want[0] || got[1] != want[1] {
			t.Errorf("TwoSum(%v, %d) = %v, want %v", nums, target, got, want)
		}
	})

	t.Run("Example 2", func(t *testing.T) {
		nums := []int{3, 2, 4}
		target := 6
		want := []int{1, 2}
		got := TwoSum(nums, target)
		if got[0] != want[0] || got[1] != want[1] {
			t.Errorf("TwoSum(%v, %d) = %v, want %v", nums, target, got, want)
		}
	})
}
