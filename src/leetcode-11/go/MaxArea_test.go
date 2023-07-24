package leetcode_11

import "testing"

type test struct {
	name   string
	height []int
	want   int
}

func TestMaxArea(t *testing.T) {
	tests := []test{
		{name: "Example 1", height: []int{1, 8, 6, 2, 5, 4, 8, 3, 7}, want: 49},
		{name: "Example 2", height: []int{1, 1}, want: 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := MaxArea(tt.height)
			if got != tt.want {
				t.Errorf("MaxArea(%v) = %d, want %d", tt.height, got, tt.want)
			}
		})
	}
}
