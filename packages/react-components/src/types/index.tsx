import type { SerializedStyles } from '@emotion/react';

export interface ElementStyle<StyleProps extends object = {}> {
	(props: StyleProps): SerializedStyles;
}
