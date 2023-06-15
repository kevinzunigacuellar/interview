export function maxArea(height: number[]): number {
	let left = 0;
	let right = height.length - 1;
	let waterVolume = 0;
	while (left < right) {
		const w = right - left;
		const h = Math.min(height[left], height[right]);
		waterVolume = Math.max(w * h, waterVolume);
		if (height[left] < height[right]) {
			left += 1;
		} else {
			right -= 1;
		}
	}
	return waterVolume;
}
