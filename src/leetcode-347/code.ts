export function topKFrequent(nums: number[], k: number): number[] {
	const memory = new Map<number, number>();
	const result: number[] = [];
	for (const num of nums) {
		const numCount = memory.get(num);
		if (numCount !== undefined) {
			memory.set(num, numCount + 1);
		} else {
			memory.set(num, 1);
		}
	}

	const sortedArray = Array.from(memory).sort((a, b) => b[1] - a[1]);

	for (let i = 0; i < k; i++) {
		const [item] = sortedArray[i];
		result.push(item);
	}
	return result;
}
