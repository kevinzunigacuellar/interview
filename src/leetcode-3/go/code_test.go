package code

import "testing"

type test struct {
	s    string
	want int
}

func TestLengthOfLongestSubstring(t *testing.T) {
	tests := []test{
		{s: "abcabcbb", want: 3},
		{s: "bbbbb", want: 1},
		{s: "pwwkew", want: 3},
	}

	for _, tt := range tests {
		t.Run(tt.s, func(t *testing.T) {
			got := LengthOfLongestSubstring(tt.s)
			if got != tt.want {
				t.Errorf("LengthOfLongestSubstring(%s) = %d, want %d", tt.s, got, tt.want)
			}
		})
	}

}
