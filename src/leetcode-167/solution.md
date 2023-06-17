# Leetcode 167 - Two Sum II - Input array is sorted

> Problem URL: [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)

## Solution

We use two pointers to solve this problem. One pointer starts from the beginning of the array, and the other pointer starts from the end of the array. We compare the sum of the two numbers pointed by the two pointers with the target. If the sum is smaller than the target, we move the start pointer to the right. If the sum is larger than the target, we move the end pointer to the left. If the sum is equal to the target, we return the indices of the two numbers.
