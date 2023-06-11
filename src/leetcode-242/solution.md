# Leetcode 242 Valid Anagram

> Problem URL: [https://leetcode.com/problems/valid-anagram/](https://leetcode.com/problems/valid-anagram/)

## Solution

We use a hash map to store the number of times each character appears in the first string. Then we iterate through the second string and decrement the count of each character in the hash map. If we see a character that is not in the hash map, or the count of a character in the hash map is less than 0, we return `false`. If we iterate through the whole second string and do not see any invalid character, we return `true`
