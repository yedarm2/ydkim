declare const PI = 3.14;

declare module 'asas' {
	export function createServer(arg: number): void;
	export function createServer2(arg: string): void;
}

declare module 'abc' {
	declare const PI = 3.14;
	export default PI;
}

declare module 'commonModule' {
	declare const string = 'commonJS';
	module.exports = string;
}
