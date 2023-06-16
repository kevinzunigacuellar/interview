import { expect, test } from "vitest";
import { maxProfit } from "./code";

test("Example 1", () => {
	const prices = [7, 1, 5, 3, 6, 4];
	expect(maxProfit(prices)).eq(5);
});

test("Example 2", () => {
	const prices = [7, 6, 4, 3, 1];
	expect(maxProfit(prices)).eq(0);
});

test("Example 3", () => {
	const prices = [5, 2, 1, 4];
	expect(maxProfit(prices)).eq(3);
});
