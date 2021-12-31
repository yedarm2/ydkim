export const colors = {
	red: '#fa5252',
	yellow: '#fcc419',
	orange: '#ff922b',
	green: '#40c057',
	blue: '#228be6',
	purple: '#7950f2',
	lime: '#82c91e',
	gray: '#343a40',
} as const;

export type Color = keyof typeof colors;
