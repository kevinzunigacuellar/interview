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

export function topKFrequent2(nums: number[], k: number): number[] {
	const memory = new Map<number, number>();
	const frequency: number[][] = new Array(nums.length + 1).fill([]);
	const result: number[] = [];
	for (const num of nums) {
		const count = memory.get(num);
		if (count !== undefined) {
			memory.set(num, count + 1);
		} else {
			memory.set(num, 1);
		}
	}
	for (const [num, count] of memory.entries()) {
		frequency[count] = frequency[count].concat(num);
	}

	for (let i = nums.length; i >= 0; i--) {
		for (const item of frequency[i]) {
			if (result.length === k) break;
			result.push(item);
		}
	}

	return result;
}
