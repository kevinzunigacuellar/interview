import { expect, test } from "vitest";
import { groupAnagrams } from "./code";

test("Example 1", () => {
	const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
	const result = groupAnagrams(strs);
	expect(result).toEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
});

test("Example 2", () => {
	const strs = [""];
	const result = groupAnagrams(strs);
	expect(result).toEqual([[""]]);
});

test("Example 3", () => {
	const strs = ["a"];
	const result = groupAnagrams(strs);
	expect(result).toEqual([["a"]]);
});
