# Leetcode 88 - Merge Sorted Array

> Problem URL: [https://leetcode.com/problems/merge-sorted-array/](https://leetcode.com/problems/merge-sorted-array/)

## Solution

We can use two pointers to solve this problem. One pointer points to `m - 1`, and the other pointer points to the end of `n - 1`. We compare the two numbers pointed by the two pointers, and put the larger one to the end of `nums1`. We repeat this process until we reach the beginning of `nums1` or `nums2`.

if there are still numbers in `nums2` or `nums1`, we put them to the beginning of `nums1`.
