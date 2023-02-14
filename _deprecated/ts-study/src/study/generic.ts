function identify<T>(arg: T): T {
	return arg;
}

function identifyArray<T>(arg: T[]): T[] {
	console.log('length', arg.length);
	return arg;
}

interface identifyFunction1 {
	<T>(arg: T): T;
}

interface identifyFunction2<T> {
	(arg: T): T;
}

const identify2: identifyFunction1 = identify;
const identify3: <T>(arg: T) => T = identify;
const identify4: identifyFunction2<number> = identify; // 이렇게 사전에 타입 변수를 제한 하는 것도 가능하다.

class GenericClass<T> {
	constructor(public value: T) {}
}

const obj1: GenericClass<number> = new GenericClass(100);

interface lengthObj {
	length: number;
}

function logginLength<T extends lengthObj>(arg: T) {
	console.info(arg.length);
}

logginLength([1, 2, 4, 5]);
logginLength('asasas');
logginLength({ length: 10, value: 100 });

function printValue<T, K extends keyof T>(obj: T, key: K) {
	console.log(obj[key]);
}

const testObject = {
	id: 1,
	name: 'bread',
};
printValue(testObject, 'id');
// printValue(testObject, 'ida'); // 에러

function create<C extends Fruit>(Factory: new () => C) {
	return new Factory();
}

// create(Apple);

console.info(
	'identify<string>, identify, identifyArray, GenericClass',
	identify<string>('Hello, world!!'),
	identify('Hello, world!!'),
	identifyArray([1, 2, 3, 4]),
	identify2,
	identify3,
	identify4,
	new GenericClass(1),
	obj1,
);
