# Leetcode 11 - Container With Most Water

> [Problem URL](https://leetcode.com/problems/container-with-most-water/)

## Solution

We use two pointers to solve this problem. The left pointer starts from the leftmost element and the right pointer starts from the rightmost element. We calculate the area of the container and update the maximum area. Then we move the pointer that points to the shorter line towards the other pointer. We repeat this process until the two pointers meet.
