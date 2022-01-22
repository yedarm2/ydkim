import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		primary: {
			backgroundColor: string;
			textColor: string;
		};
	}
}
