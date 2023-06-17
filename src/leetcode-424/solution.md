# Leetcode 424 - Longest Repeating Character Replacement

> Problem URL: [https://leetcode.com/problems/longest-repeating-character-replacement/](https://leetcode.com/problems/longest-repeating-character-replacement/)

## Solution

We use a sliding window to solve this problem. The window is defined by two pointers `start` and `end`. we record the current counter of each character in a map. If the length of the window `end - start + 1` (+1 includes the end pointer digit) minus the maximum frequency of the character in the window is greater than `k`, we need to shrink the window by moving the `start` pointer to the right. Finally, we update the maximum length of the window.
