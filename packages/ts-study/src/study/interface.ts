interface interface1 {
	id: number;
	name: string;
}

interface interface2 {
	id: number;
	name: string;
	age: number;
}

const obj: interface1 = {
	id: 1,
	name: 'obj',
};
const obj2: interface2 = {
	id: 10,
	name: 'joth',
	age: 10,
};

interface printObjInterface {
	(var1: interface1): void;
}
const printObj: printObjInterface = arg => console.info('printObj', arg);
printObj(obj);
printObj(obj2);
printObj(obj2);

interface Square {
	readonly width?: number;
	height?: number;
}

const square: Square = {
	width: 10,
	height: 10,
};
// readonly속성으로 아래의 코드는 에러를 발생시킨다.
// square.width = 10;

const numberRArray: ReadonlyArray<number> = [1, 2, 3, 4];
// 아래의 코드들은 에러를 발생시킨다.
// numberRArray[0] = 10;
// numberRArray.push(10);

interface StringArray {
	[index: number]: string;
}

const stringArray: StringArray = ['bob', 'cat'];
const stringMap: StringArray = {
	1: 'a',
	2: 'b',
	3: 'd',
};

interface personInterface {
	name: string;
	age: number;
}

class Person implements personInterface {
	name: string;

	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

interface personConstructor {
	new (name: string, age: number): personInterface;
}

const MockPerson: personConstructor = Person;

console.log(
	'square, numberRArray, stringArray, stringMap, new Person',
	square,
	numberRArray,
	stringArray,
	stringMap,
	new MockPerson('cat', 100),
);

interface originalInterface {
	id: number;
}

interface extendedInterface extends originalInterface {
	age: number;
}

const account: extendedInterface = {
	id: 10,
	age: 100,
};

console.log('account', account);
