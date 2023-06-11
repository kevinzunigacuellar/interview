export function containsDuplicate(nums: number[]): boolean {
	const memory = new Map<number, boolean>();
	for (const num of nums) {
		if (memory.has(num)) return true;
		memory.set(num, true);
	}
	return false;
}
