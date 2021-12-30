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

export type Size = 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';

export const Sizes: Size[] = ['small', 'medium', 'large', 'xLarge', 'xxLarge'];

export type sizeObject = {
	[key in Size]: string;
};

export const fontSizes: sizeObject = {
	small: '12px',
	medium: '14px',
	large: '18px',
	xLarge: '26px',
	xxLarge: '40px',
};
