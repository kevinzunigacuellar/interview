import { expect, test } from "vitest";
import { productExceptSelf } from "./code";

test("Example 1", () => {
	const result = productExceptSelf([1, 2, 3, 4]);
	expect(result).toEqual([24, 12, 8, 6]);
});

test("Example 2", () => {
	const result = productExceptSelf([-1, 1, 0, -3, 3]);
	expect(result).toEqual([-0, 0, 9, -0, 0]);
});
