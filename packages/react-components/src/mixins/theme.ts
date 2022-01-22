import { css } from '@emotion/react';
import { Mixin } from '../types';

export const color: Mixin = props => css`
	color: ${props?.theme?.color?.primary};
`;

export const backgroundColor: Mixin = props => css`
	background-color: ${props?.theme?.backgroundColor?.primary};
`;
