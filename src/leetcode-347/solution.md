# Leetcode 347 - Top K Frequent Elements

> Problem URL: [https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)

## Solution

We use a map to store the frequency of each element in the input array. Then we sort the map by the frequency of each element in descending order. Finally, we return the first `k` elements of the sorted map.
