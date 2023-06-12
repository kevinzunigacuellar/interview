# Leetcode 238 - Product of Array Except Self

> Problem URL [https://leetcode.com/problems/product-of-array-except-self/](https://leetcode.com/problems/product-of-array-except-self/)

## Solution

We use an array to store the product of all elements to the left of the current element. Then we overwrite the array with the product of all elements to the right of the current element times the product of all elements to the left of the current element.
