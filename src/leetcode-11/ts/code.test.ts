import { expect, test } from "vitest";
import { maxArea } from "./code";

test("Example 1", () => {
	const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
	const result = maxArea(height);
	expect(result).toEqual(49);
});

test("Example 2", () => {
	const height = [1, 1];
	const result = maxArea(height);
	expect(result).toEqual(1);
});
