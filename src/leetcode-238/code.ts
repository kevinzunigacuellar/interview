export function productExceptSelf(nums: number[]): number[] {
	const result = new Array(nums.length).fill(1);
	let acc = 1;
	for (let i = 0; i < nums.length - 1; i++) {
		acc = nums[i] * acc;
		result[i + 1] = acc;
	}
	acc = 1;
	for (let i = nums.length - 1; i > 0; i--) {
		acc = nums[i] * acc;
		result[i - 1] = acc * result[i - 1];
	}
	return result;
}
