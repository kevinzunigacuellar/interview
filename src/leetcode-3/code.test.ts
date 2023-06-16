import { test, expect } from "vitest";
import { lengthOfLongestSubstring } from "./code";

test("Example 1", () => {
	const s = "abcabcbb";
	expect(lengthOfLongestSubstring(s)).eq(3);
});

test("Example 2", () => {
	const s = "bbbbb";
	expect(lengthOfLongestSubstring(s)).eq(1);
});

test("Example 3", () => {
	const s = "pwwkew";
	expect(lengthOfLongestSubstring(s)).eq(3);
});
