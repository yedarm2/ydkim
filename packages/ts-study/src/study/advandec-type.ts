interface Person {
	name: string;
	age: number;
}

interface User {
	id: number;
	account: string;
}

function isPerson(obj: Person | User): obj is Person {
	return (obj as Person).name !== undefined;
}

function printInfo(obj: Person | User) {
	if (isPerson(obj)) { // * isPerson에 의해서 Person으로 인식하게 된다.
		console.info(obj.name);
	} else if (obj.id) { // * isPerson이 false인 경우의 조건문이므로 자동적으로 User 타입으로 인식하게 된다.
		console.info(obj.id);
	}
}

function checkName(obj: Person | User) {
	if ('name' in obj) {
		// * obj의 타입은 기존의 obj의 타입 중 'name'을 갖고 있는 타입 혹은 유니온 타입이 되고
		// * name의 타입 해당 타입의 name의 타입 (경우에 따라서는 유니온 타입)으로 지정이 된다.
		console.info('name이 존재합니다.', obj.name);
	} else {
		// * 이 스코프에서는 name이 존재하지 않는 타입으로 obj의 타입이 설정이 된다.
		// * 만약 obj의 타입 모두가 name을 갖고 있다면 obj의 타입은 never가 된다.
		console.info('name이 없습니다.');
		// console.info(obj.name); // * 해당 코드는 에러를 발생시키게 된다.
	}
}

function checkNumber(variable) {
	if (typeof variable === 'number') {
		// * typeof 연산자를 통해 타입가드가 적용되어서 스코프 내의 variable은 number 타입으로 취급이 된다.
		console.info('이 변수는 number 입니다.', variable.toFixed(5));
	}
}

class InstanceOfTypeGuardClass {
	constructor(public number = 0) {}

	printNumber() {
		console.info(this.number);
	}
}

const instance: unknown = new InstanceOfTypeGuardClass(100);

// * instance가 unknown이어서 이곳에서는 사용이 불가능하다.
// instance.printNumber();

if (instance instanceof InstanceOfTypeGuardClass) {
	// * instanceof 타입 가드로 인해서 이 스코프 내에서는 InstanceOfTypeGuardClass 타입으로 취급이 된다.
	instance.printNumber();
}

// * number와 undefined는 넣을 수 있지만 null은 별개로 넣을 수 없다.
let number1: number | undefined = undefined;

function addNumber(num1: number, num2?: number) {
	return typeof num2 === 'undefined' ? num1 : num1 + num2;
}

// * num2의 타입은 number | undefined여서 null을 넣지 못한다.
// addNumber(10, null);

// * 유니온으로 만들어진 nullable 타입에서 null을 제거하기 위해서는 null에 대한 검사 코드가 필요하다.
function returnString(str: string | null): string {
	return str !== null ? str : 'abc';
}

function printNumber(num: number | null) {
	return num!.toFixed(10);
}

type numberOrString = number | string;
let var1:  numberOrString = 'a';
var1 = 0;

type genericType<T> = {
	id: T,
	data: {
		content: T
	}
}

let genericObj: genericType<number> = {
	id: 1,
	data: {
		content: 10,
	},
};

class PolymorphicClass {
	constructor(public num = 0) {}

	add(num = 0) : this {
		this.num + num;
		return this;
	}
}

class PolymorphicClass2 extends PolymorphicClass {
	sub(num = 0): this {
		this.num -= num;

		return this;
	}
}

new PolymorphicClass2(100).add(100).sub(100).add(200);

interface Car {
	manufacturer: string;
	name: string;
	year: number;
}

// type: 'manufacturer' | 'name' | 'year'
type CarProperty = keyof Car;

const taxi: Car = {
	manufacturer: 'toyota',
	name: 'Camry',
	year: 2014
};

// * getProperty의 값은 key에 어떤 프로퍼티를 지정했는지에 따라 달라지게 된다.
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
	return object[key];
}

const taxiManuFacturer = getProperty(taxi, 'name'); // * string 타입으로 지정된다.
const taxiYear = getProperty(taxi, 'year'); // * number 타입으로 지정된다.

function pluck<T, K extends keyof T>(object: T, keys: K[]): T[K][] {
	return keys.map(key => object[key]);
}

// * Car['name']은 string, Car['year']는 number이므로
// 변수의 타입은 type: (string | number)[]가 된다.
const taxiNameAndYear = pluck(taxi, ['name', 'year']);

// * type: (string | number)[];
const result = pluck(taxi, ['manufacturer', 'year']);

interface StringDictionary<T> {
	[key: string]: T
}

// * type: string | number
type StringDictionaryKey = keyof StringDictionary<number>;
// * type: number
type StringDictionaryValue = StringDictionary<number>['prop'];

interface NumberDictionary<T> {
	[key: number]: T
}
// * type: number
type NumberDictionaryKey = keyof NumberDictionary<Person>;
// * type: Person
type NumberDictionaryValue = NumberDictionary<Person>[10];
// * NumberDictionary에는 문자열 key를 쓸 수 없기에 에러를 일으킨다.
// type NumberDictionaryValue2 = NumberDictionary<Person>['prop'];

type TPartial<T> = {
	[P in keyof T]?: T[P];
};

type TestType1 = {
	id: number;
	name: string;
	age: number;
};
// type partialType = {
// 	id?: number;
// 	name?: string;
// 	age?: number;
// };
// * TPartial에 의해서 모든 프로퍼티가 옵셔널 프로퍼티로 바뀐 타입이 전달이 되었다.
type partialType = TPartial<TestType1>;

type MappedType<T> = {
	[P in keyof T]: () => T[P];
}

// * MappedType에 의해서 전달한 타입의 key와 일치하는 type을 반환하는 메서드들로 이루어진 객체를 생성하게 된다.
const testTypeFunctions: MappedType<TestType1> = {
	id: () => 1,
	name: () => 'pet',
	age: () => 1,
};

type ReadonlyWithMoney<T> = {
	readonly [P in keyof T]: T[P]
} & { money: number };

const moneyPerson: ReadonlyWithMoney<TestType1> = {
	id: 1,
	name: 'Jelly',
	age: 100,
	money: 1000,
};

type typeList = 'prop1' | 'prop2';
// type boolTypeMap = {
// 	prop1: boolean;
// 	prop2: boolean;
// };
type boolTypeMap = {
	[K in typeList]: boolean;
};

type conditionalType<T> =
	T extends string ? number :
	T extends boolean ? string :
	T extends number ? boolean :
	T extends any[] ? T[number] : any;

// * 조건부 타입을 반환 값으로 지정했을 때 반환하는 코드에  조건부 타입으로 단언하는 코드를 넣어야 한다.
function returnStringOrNumber<T extends (number | string | boolean | any[])>(arg: T): conditionalType<T> {
	if (typeof arg === 'string') {
		return 1 as conditionalType<T>;
	}

	if (typeof arg === 'boolean') {
		return 'a' as conditionalType<T>;
	}

	if (typeof arg === 'number') {
		return true as conditionalType<T>;
	}

	if (Array.isArray(arg)) {
		return arg[0] as conditionalType<T>;
	}

	return {} as conditionalType<T>
}

// * result1에는 number 타입, result2에는 string 타입이, result3에는 boolean 타입이 들어가게 된다.
const result1 = returnStringOrNumber('a');
const result2 = returnStringOrNumber(true);
const result3 = returnStringOrNumber(1);
const result4 = returnStringOrNumber([1]);

// * number | boolean
type distributiveConditionalType = conditionalType<string | number>;

type NonNumber<T> = T extends number ? never : T;
// * NonNumber1 = string | boolean;
type NonNumber1 = NonNumber<string | number | boolean>;
// * NonNumber2 = 'a' | 'b';
type NonNumber2 = NonNumber<'a' | 'b' | 1 | 2>;

type Diff<T, U> = T extends U ? never : T;
// * DiffTypes1 = 'a' | 'f';
type DiffTypes1 = Diff<'a' | 'b' | 'c' | 'f', 'b' | 'c' | 'e'>;

// * T의 프로퍼티 중에서 함수만을 필퍼링 하는 타입
type FunctionPropertyNames<T> = {
	// * T[P]가 함수일 경우에는 프로퍼티 명에 해당하는 P를 반환한다.
	[P in keyof T]: T[P] extends Function ? P : never;
}[keyof T]; // * T의 프로퍼티에 해당하는 요소에 대한 타입 값을 유니온 타입으로 받게 한다. (여기서 타입값은 프로퍼티 이름이므로 프로퍼티 이름을 유니온 타입으로 받게 된다.)
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

// aaa = {
// 	getAge: () => number;
// 	getName: () => string;
// }
type aaa = FunctionProperties<{
	age: number;
	name: string;
	getAge: () => number;
	getName: () => string;
}>;

// * 함수의 반환 값을 전달하는 타입
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : any;
// * T1 = [number, boolean];
type T1 = ReturnType1<() => [number, boolean]>;

// * 함수의 두번째 파라미터의 타입을 전달하는 타입
type SecondParameter<T> = T extends (arg1: any, arg2: infer R) => any ? R : any;
// * T2 = boolean
type T2 = SecondParameter<(arg1: number, arg2: boolean) => any>;
