import { expect, test } from "vitest";
import { isAnagram } from "./code";

test("Example 1", () => {
	const result = isAnagram("anagram", "nagaram");
	expect(result).toEqual(true);
});

test("Example 2", () => {
	const result = isAnagram("rat", "car");
	expect(result).toEqual(false);
});
