import { expect, test } from "vitest";
import { removeDuplicates } from "./code";

test("Example 1", () => {
	const nums = [1, 1, 1, 2, 2, 3];
	const result = removeDuplicates(nums);
	expect(result).toEqual(5);
	expect(nums.slice(0, result)).toEqual([1, 1, 2, 2, 3]);
});

test("Example 2", () => {
	const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
	const result = removeDuplicates(nums);
	expect(result).toEqual(7);
	expect(nums.slice(0, result)).toEqual([0, 0, 1, 1, 2, 3, 3]);
});
