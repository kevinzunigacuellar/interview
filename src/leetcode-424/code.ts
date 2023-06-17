/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function characterReplacement(s: string, k: number): number {
	const counter = new Map<string, number>();
	let start = 0;
	let max = 0;
	for (let end = 0; end < s.length; end++) {
		const char = s[end];
		if (!counter.has(char)) {
			counter.set(char, 1);
		} else {
			counter.set(char, counter.get(char)! + 1);
		}
		while (end - start + 1 - Math.max(...counter.values()) > k) {
			counter.set(s[start], counter.get(s[start])! - 1);
			start += 1;
		}
		max = Math.max(max, end - start + 1);
	}
	return max;
}
