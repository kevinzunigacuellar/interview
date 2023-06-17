import { expect, test } from "vitest";
import { characterReplacement } from "./code";

test("Example 1", () => {
	const result = characterReplacement("ABAB", 2);
	expect(result).toEqual(4);
});

test("Example 2", () => {
	const result = characterReplacement("AABABBA", 1);
	expect(result).toEqual(4);
});
