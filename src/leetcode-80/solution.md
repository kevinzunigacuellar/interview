# Leetcode 80: Remove Duplicates from Sorted Array II

> Problem URL: [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)

## Solution

We use a map to record the number of each element in `nums` and a pointer `i` to record the position of the next element to be put in `nums`. We iterate `nums` and check if the number of the current element is less than or equal to 2. If so, we put the current element to `nums[i]` and increment `i`. Otherwise, we skip the current element.
