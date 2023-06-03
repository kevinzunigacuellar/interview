export function removeDuplicates(nums: number[]): number {
	let i = 0;
	const memory = new Map<number, number>();
	for (const num of nums) {
		const currentCount = memory.get(num);
		if (currentCount === undefined) {
			memory.set(num, 1);
			nums[i] = num;
			i++;
			continue;
		}
		if (currentCount >= 2) continue;
		memory.set(num, currentCount + 1);
		nums[i] = num;
		i++;
	}
	return i;
}
