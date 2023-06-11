import { expect, test } from "vitest";
import { mergeAlternately } from "./code";

test("Example 1", () => {
	const result = mergeAlternately("abc", "pqr");
	expect(result).toEqual("apbqcr");
});

test("Example 2", () => {
	const result = mergeAlternately("ab", "pqrs");
	expect(result).toEqual("apbqrs");
});

test("Example 3", () => {
	const result = mergeAlternately("abcd", "pq");
	expect(result).toEqual("apbqcd");
});
