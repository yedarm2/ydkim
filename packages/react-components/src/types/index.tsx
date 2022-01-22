import type { SerializedStyles, Theme } from '@emotion/react';

export interface ElementStyle<StyleProps extends object = {}> {
	(props?: StyleProps & { theme: Theme }): SerializedStyles;
}

export interface Mixin<StyleProps extends object = {}> extends ElementStyle<StyleProps> {}

export type ThemeType = 'light' | 'dark';
