import { expect, test } from "vitest";
import { longestConsecutive } from "./code";

test("Example 1", () => {
	const nums = [100, 4, 200, 1, 3, 2];
	expect(longestConsecutive(nums)).eq(4);
});

test("Example 2", () => {
	const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
	expect(longestConsecutive(nums)).eq(9);
});
