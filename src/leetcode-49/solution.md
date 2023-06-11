# Leetcode 49 - Group Anagrams

> [Problem URL](https://leetcode.com/problems/group-anagrams/)

## Solution

We use a map to store the anagrams. The key of the map is the a string representation of the count of each character in the anagram. The value of the map is an list of anagrams that have the same string representation of the count of each character.

We iterate through the input array and put each anagram to the map. If the string representation of the count of each character of the current anagram is not in the map, we create a new list and put the current anagram to the list. Otherwise, we append the current anagram to the list.
