export function isAnagram(s: string, t: string): boolean {
	const memory = new Map<string, number>();

	if (s.length !== t.length) return false;

	for (const letter of s) {
		const count = memory.get(letter);
		if (count) {
			memory.set(letter, count + 1);
		} else {
			memory.set(letter, 1);
		}
	}

	for (const letter of t) {
		if (!memory.has(letter)) return false;
		const count = memory.get(letter);
		if (!count) return false;
		memory.set(letter, count - 1);
	}
	return true;
}
