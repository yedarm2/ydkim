import type { SerializedStyles, Theme } from '@emotion/react';

export interface ElementStyle<StyleProps extends object = {}> {
	(props?: StyleProps): SerializedStyles;
}

export interface Mixin extends ElementStyle<{ theme: Theme }> {}

export type ThemeType = 'light' | 'dark';
