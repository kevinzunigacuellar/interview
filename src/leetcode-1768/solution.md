# Leetcode 1768 - Merge Strings Alternately

> Problem URL: [https://leetcode.com/problems/merge-strings-alternately](https://leetcode.com/problems/merge-strings-alternately)

## Solution

We use two pointers to track the current position of `word1` and `word2`. We iterate `word1` and `word2` and put the current character of `word1` and `word2` to the result string alternately. If one of the two pointers reaches the end of the corresponding string, we put the rest of the other string to the result string.
