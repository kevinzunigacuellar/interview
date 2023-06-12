import { expect, test } from "vitest";
import { containsDuplicate } from "./code";

test("Example 1", () => {
	const result = containsDuplicate([1, 2, 3, 1]);
	expect(result).toEqual(true);
});

test("Example 2", () => {
	const result = containsDuplicate([1, 2, 3, 4]);
	expect(result).toEqual(false);
});

test("Example 3", () => {
	const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
	expect(result).toEqual(true);
});
