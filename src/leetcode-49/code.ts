export function groupAnagrams(strs: string[]): string[][] {
	const collection = new Map<string, string[]>();
	const a = "a".charCodeAt(0);
	for (const word of strs) {
		const wordHash = new Array(26).fill(0);
		for (let i = 0; i < word.length; i++) {
			const index = word.charCodeAt(i) - a;
			wordHash[index] = wordHash[index] += 1;
		}
		const key = wordHash.join();
		let arr = collection.get(key);

		if (arr !== undefined) {
			arr.push(word);
		} else {
			arr = [word];
		}
		collection.set(key, arr);
	}
	return Array.from(collection.values());
}
