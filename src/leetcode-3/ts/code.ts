export function lengthOfLongestSubstring(s: string): number {
	const memory = new Set<string>();
	let l = 0;
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		while (memory.has(char)) {
			memory.delete(s[l]);
			l += 1;
		}
		memory.add(char);
		max = Math.max(max, memory.size);
	}
	return max;
}
