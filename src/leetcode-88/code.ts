export function merge(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number
): void {
	let n1_i = m - 1;
	let n2_i = n - 1;
	let curr = m + n - 1;

	// if nums2 is empty, nums1 is already sorted
	if (n === 0) return;

	// while both arrays have items
	while (n1_i >= 0 && n2_i >= 0) {
		if (nums1[n1_i] > nums2[n2_i]) {
			nums1[curr] = nums1[n1_i];
			n1_i--;
		} else {
			nums1[curr] = nums2[n2_i];
			n2_i--;
		}
		curr--;
	}

	// fill the remaining items of nums2 to nums1
	while (n2_i >= 0) {
		nums1[curr] = nums2[n2_i];
		n2_i--;
		curr--;
	}

	// fill the remaining items of nums1_copy to nums2
	while (n1_i >= 0) {
		nums1[curr] = nums1[n1_i];
		n1_i--;
		curr--;
	}
}
