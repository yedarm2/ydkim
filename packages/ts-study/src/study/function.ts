function add(number1: number, number2: number): number {
	return number1 + number2;
}

const substrack: (number1: number, number2: number) => number = (num1, num2) => num1 - num2;

// 에러 발생
// add(10);
// substrack(10, 20, 30);

function add2(number1: number, number2?: number): number {
	return number2 === undefined ? number1 : number1 + number2;
}

add2(10);
add2(10, 20);
// add2(10, 20, 30); // 매개변수 갯수 초과로 에러 발생

function add3(num1 = 0, num2 = 0): number {
	return num1 + num2;
}

add3(10);
add3(10, 20);
add3(undefined, 20);
// add3(10, 20, 30); // 매개변수 갯수 초과로 에러 발생

function restFunction(...args: number[]): string {
	return args.join('');
}

restFunction(10, 20, 50);

function toFixed(this: number, addNumber = 10) {
	console.info('toFixed', (this + addNumber).toFixed(20));
}

console.info(
	'add(10, 20), add2(10), add3(undefined, 20)',
	add(10, 20),
	add2(10),
	add3(undefined, 20),
);

toFixed.call(100, 200);

function overloadedFunction(x: number): number;
function overloadedFunction(x: string): string;
function overloadedFunction(x) {
	if (typeof x === 'number') return x * x;
	if (typeof x === 'string') return `result: ${x}`;
}

console.info(
	'overloadedFunction(10), overloadedFunction(s)',
	overloadedFunction(10),
	overloadedFunction('s'),
);
