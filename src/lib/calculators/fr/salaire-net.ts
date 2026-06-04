export type TaxBracket = {
	threshold: number;
	rate: number;
};

export const franceIncomeTaxBrackets: TaxBracket[] = [
	{ threshold: 10777, rate: 0 },
	{ threshold: 27478, rate: 0.11 },
	{ threshold: 78570, rate: 0.30 },
	{ threshold: 168994, rate: 0.41 },
	{ threshold: Infinity, rate: 0.45 },
];

export function calculateFranceIncomeTax(income: number) {
	const breakdown = [] as Array<{ rate: number; taxable: number; tax: number }>;
	let remaining = Math.max(0, income);
	let previousThreshold = 0;
	let totalTax = 0;

	for (const bracket of franceIncomeTaxBrackets) {
		if (remaining <= 0) break;
		const slice = Math.min(remaining, bracket.threshold - previousThreshold);
		const tax = slice * bracket.rate;
		breakdown.push({ rate: bracket.rate, taxable: slice, tax });
		totalTax += tax;
		remaining -= slice;
		previousThreshold = bracket.threshold;
	}

	return {
		totalTax,
		effectiveRate: income > 0 ? totalTax / income : 0,
		breakdown,
	};
}

export function formatEUR(value: number) {
	return new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0,
	}).format(value);
}
