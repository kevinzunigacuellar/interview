# Leetcode 1. Two Sum

> Problem URL: [https://leetcode.com/problems/two-sum/](https://leetcode.com/problems/two-sum/)

## Solution

We use a map to record the index of each element in `nums` with its complement `target - num`. We iterate `nums` and check if current element exists in the map. If so, we return the indices of the current element and its stored record in the map. Otherwise, we store the complement of the current element `target - num` and its index in the map.
