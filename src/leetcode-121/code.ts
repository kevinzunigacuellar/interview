export function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let localMin = prices[0];
	for (let i = 1; i < prices.length; i++) {
		localMin = Math.min(localMin, prices[i - 1]);
		maxProfit = Math.max(maxProfit, prices[i] - localMin);
	}
	return maxProfit;
}
