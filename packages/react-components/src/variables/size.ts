export type Size = 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';

export const Sizes: Size[] = ['small', 'medium', 'large', 'xLarge', 'xxLarge'];

export type SizeObject = {
	[key in Size]: string | number;
};

export const fontSizes: SizeObject = {
	small: '12px',
	medium: '14px',
	large: '18px',
	xLarge: '26px',
	xxLarge: '40px',
};
