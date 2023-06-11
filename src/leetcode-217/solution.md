# Leetcode 217 - Contains Duplicate

> Problem URL: [https://leetcode.com/problems/contains-duplicate](https://leetcode.com/problems/contains-duplicate)

## Solution

We use a hash set to store the numbers we have seen. If we see a number that is already in the hash set, we return `true`. If we iterate through the whole array and do not see any duplicate number, we return `false`.
