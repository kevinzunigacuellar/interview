import { expect, test } from "vitest";
import { topKFrequent, topKFrequent2 } from "./code";

test("Example 1", () => {
	const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
	const result2 = topKFrequent2([1, 1, 1, 2, 2, 3], 2);
	expect(result).toEqual([1, 2]);
	expect(result2).toEqual([1, 2]);
});

test("Example 2", () => {
	const result = topKFrequent([1], 1);
	const result2 = topKFrequent2([1], 1);
	expect(result).toEqual([1]);
	expect(result2).toEqual([1]);
});
