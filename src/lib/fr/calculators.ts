export type CalculatorItem = {
	slug: string;
	title: string;
	description: string;
	category: string;
	href: string;
	emoji: string;
};

export const FR_CALCULATORS: CalculatorItem[] = [
	{
		slug: 'salaire-net',
		title: 'Impôt sur le revenu',
		description: 'Calculez l’impôt français par tranche et votre taux effectif moyen.',
		category: 'Impôts & contributions',
		href: '/fr/salaire-net',
		emoji: '🧾',
	},
	{
		slug: 'brut-net',
		title: 'Brut → Net',
		description: 'Estimez votre salaire net avant impôt à partir du brut.',
		category: 'Travail & Salaire',
		href: '/fr/brut-net',
		emoji: '💼',
	},
	{
		slug: 'charges-sociales',
		title: 'Charges sociales',
		description: 'Simulez les cotisations salariales et le salaire net avant impôt.',
		category: 'Prestations sociales',
		href: '/fr/charges-sociales',
		emoji: '🛡️',
	},
	{
		slug: 'tva',
		title: 'Calcul TVA',
		description: 'Passez du prix hors taxe au prix TTC et identifiez la part de TVA.',
		category: 'Impôts & contributions',
		href: '/fr/tva',
		emoji: '📊',
	},
	{
		slug: 'pret-immobilier',
		title: 'Prêt immobilier',
		description: 'Calculez vos mensualités et le coût total d’un prêt immobilier.',
		category: 'Logement & immobilier',
		href: '/fr/pret-immobilier',
		emoji: '🏠',
	},
	{
		slug: 'bmi',
		title: 'IMC',
		description: 'Calculez votre indice de masse corporelle et la catégorie santé.',
		category: 'Santé',
		href: '/fr/bmi',
		emoji: '❤️',
	},
	{
		slug: 'cout-carburant',
		title: 'Coût carburant',
		description: 'Évaluez le budget carburant pour un trajet en voiture.',
		category: 'Auto & mobilité',
		href: '/fr/cout-carburant',
		emoji: '⛽',
	},
	{
		slug: 'epargne',
		title: 'Épargne & intérêt composé',
		description: 'Projetez la valeur de votre épargne avec intérêts composés.',
		category: 'Finances & crédit',
		href: '/fr/epargne',
		emoji: '💰',
	},
	{
		slug: 'remise',
		title: 'Calcul remise',
		description: 'Calculez rapidement le prix après remise et le montant économisé.',
		category: 'Quotidien & lifestyle',
		href: '/fr/remise',
		emoji: '🏷️',
	},
];

export const FR_CATEGORIES = [
	{ slug: 'travail', title: 'Travail & Salaire' },
	{ slug: 'impots', title: 'Impôts & contributions' },
	{ slug: 'social', title: 'Prestations sociales' },
	{ slug: 'logement', title: 'Logement & immobilier' },
	{ slug: 'sante', title: 'Santé' },
	{ slug: 'auto', title: 'Auto & mobilité' },
	{ slug: 'finances', title: 'Finances & crédit' },
	{ slug: 'quotidien', title: 'Quotidien & lifestyle' },
];

export const FR_CATEGORY_CALCULATORS: Record<string, CalculatorItem[]> = {
	travail: FR_CALCULATORS.filter((item) => item.category === 'Travail & Salaire'),
	impots: FR_CALCULATORS.filter((item) => item.category === 'Impôts & contributions'),
	social: FR_CALCULATORS.filter((item) => item.category === 'Prestations sociales'),
	logement: FR_CALCULATORS.filter((item) => item.category === 'Logement & immobilier'),
	sante: FR_CALCULATORS.filter((item) => item.category === 'Santé'),
	auto: FR_CALCULATORS.filter((item) => item.category === 'Auto & mobilité'),
	finances: FR_CALCULATORS.filter((item) => item.category === 'Finances & crédit'),
	quotidien: FR_CALCULATORS.filter((item) => item.category === 'Quotidien & lifestyle'),
};
