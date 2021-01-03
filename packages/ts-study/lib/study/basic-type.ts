/* eslint-disable @typescript-eslint/no-inferrable-types */
const bool: boolean = true;

const decimal: number = 1234;
const hex: number = 0x1234;
const binary: number = 0b1100;
const octal: number = 0o100;

const array1: number[] = [1, 2, 3, 4];
const array2: Array<string> = ['a', 'b', 'c'];

const tupleArray: [boolean, number] = [false, 100];

enum Color1 {
	Red,
	Green,
	Blue,
}
const color1: Color1 = Color1.Red;

enum Color2 {
	Red = 3,
	Green,
	Blue,
}
const color2: Color2 = Color2.Red;

enum Color3 {
	Red,
	Green = 1,
	Blue,
}
const color3: Color3 = Color3.Red;

enum Color4 {
	Red,
	Green = 2,
	Blue,
}
const color4: Color4 = Color4.Red;

enum Color5 {
	Red = 2,
	Green = 5,
	Blue = 3,
}
const color5: Color5 = Color5.Red;

console.info(
	'bool, decimal, hex, binary, octal, array1, array2, tupleArray',
	`${bool}, ${decimal}, ${hex}, ${binary}, ${octal}, ${array1}, ${array2}, ${tupleArray}`,
	'color1, color2, color3, color4, color5',
	`${color1}, ${color2}, ${color3}, ${color4}, ${color5}`,
);

// let unknown: unknown = 5;
// unknown = 'abc';
// unknowre의 경우에는 아래의 동작들이 불가능하다.
// unknown.toFixed(1);
// num = unknown;

let any: any = 5;
any = 10;

const logging = (...args: any[]): void => console.info(...args);

console.info('any, logging', (<number>any).toFixed(10), logging);
