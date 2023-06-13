export function longestConsecutive(nums: number[]): number {
	const memory = new Set(nums);
	if (nums.length === 0) return 0;
	let max = 1;
	for (const num of memory) {
		if (!memory.has(num - 1)) {
			let next = num + 1;
			while (memory.has(next)) {
				next++;
			}
			max = Math.max(next - num, max);
		}
	}
	return max;
}
