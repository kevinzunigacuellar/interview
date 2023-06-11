export function twoSum(nums: number[], target: number): number[] | undefined {
	const memory = new Map<number, number>();
	for (const [index, num] of nums.entries()) {
		const numIndex = memory.get(num);
		if (numIndex !== undefined) return [numIndex, index];
		memory.set(target - num, index);
	}
}
