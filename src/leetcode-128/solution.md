# Leetcode 128 - Longest Consecutive Sequence

> Problem URL [https://leetcode.com/problems/longest-consecutive-sequence/](https://leetcode.com/problems/longest-consecutive-sequence/)

## Solution

We use a set to store all the numbers in the array. Then we iterate through the array and check if the current number is the start of a sequence. If it is, we keep incrementing the number by 1 and check if the next number is in the set. If it is, we increment the length of the sequence by 1. If it is not, we stop incrementing and check if the length of the sequence is greater than the current longest sequence. If it is, we update the longest sequence. We do this for every number in the array.
