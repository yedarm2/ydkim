import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		color: {
			primary: string;
			revert: string;
		};
		backgroundColor: {
			primary: string;
			revert: string;
		};
	}
}
