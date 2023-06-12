import { expect, test } from "vitest";
import { twoSum } from "./code";

test("Example 1", () => {
	const nums = [2, 7, 11, 15];
	const target = 9;
	const result = twoSum(nums, target);
	expect(result).toEqual([0, 1]);
});

test("Example 2", () => {
	const nums = [3, 2, 4];
	const target = 6;
	const result = twoSum(nums, target);
	expect(result).toEqual([1, 2]);
});

test("Example 3", () => {
	const nums = [3, 3];
	const target = 6;
	const result = twoSum(nums, target);
	expect(result).toEqual([0, 1]);
});
