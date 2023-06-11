export function mergeAlternately(word1: string, word2: string): string {
	let word1Ptr = 0;
	let word2Ptr = 0;
	let result = "";
	let alternate = true;

	while (word1Ptr < word1.length && word2Ptr < word2.length) {
		if (alternate) {
			result = result.concat(word1[word1Ptr]);
			word1Ptr++;
		} else {
			result = result.concat(word2[word2Ptr]);
			word2Ptr++;
		}
		alternate = !alternate;
	}

	if (word1Ptr < word1.length) {
		result = result.concat(word1.slice(word1Ptr));
	}

	if (word2Ptr < word2.length) {
		result = result.concat(word2.slice(word2Ptr));
	}

	return result;
}
