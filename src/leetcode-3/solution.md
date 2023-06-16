# Leetcode 3 - Longest Substring Without Repeating Characters

> Problem URL: [https://leetcode.com/problems/longest-substring-without-repeating-characters/](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Solution

We can use a sliding window to solve this problem. The sliding window is defined by two pointers, `left` and `right`. The `left` pointer points to the start of the window, and the `right` pointer points to the end of the window. We use a set to store the characters in the window. If the character pointed by the `right` pointer is not in the set, we add it to the set and move the `right` pointer to the right.

If the character pointed by the `right` pointer is in the set, we remove the character pointed by the `left` pointer from the set and increment the `left` pointer by 1 until the character pointed by the `right` pointer is not in the set. We update the maximum length of the window as we move the `right` pointer.
