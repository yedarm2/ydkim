import { App } from 'vue';

const vueMethods: ThisType<App> = {
	start(this: App) {
		this.mount('#app');
	},
};

interface testInterface {
	id: number;
	name: string;
	data: {
		type: string;
	};
}

function printPartialInterface(obj: Partial<testInterface>) {
	console.info(obj);
}

// data 내부의 프로퍼티까지 Partial로 처리가 되지 않는다.
printPartialInterface({
	data: {
		type: 'abc',
	},
});

const constantObject: Readonly<testInterface> = {
	id: 1,
	name: 'constantObject',
	data: {
		type: 'Readonly',
	},
};

// constantObject.name = 'abc'; // 에러 발생
constantObject.data.type = 'abc'; // 내부의 내부 프로퍼티는 변경이 가능

const recordObject: Record<number, Partial<testInterface>> = {
	1: {
		name: 'a',
	},
	2: {
		data: {
			type: 'type',
		},
	},
};

const pickedObject: Pick<testInterface, 'id' | 'data'> = {
	id: 10,
	// name: 'string', // name은 keys에 포함되지 않아서 에러를 일으킨다.
	data: {
		type: 'type',
	},
};

const omitedObject: Omit<testInterface, 'id'> = {
	// id: 10, // Omit에 id를 명시해서 에러를 일으킨다.
	name: 'a',
	data: {
		type: 'type',
	},
};

// 사실상 'b' | 'd' union이 생성이됨.
type TestUnion = 'a' | 'b' | 'c' | 'd' | 'e' | ((arg: number) => number);
type ExcludedUnion = Exclude<TestUnion, 'a' | 'c'>;
let excludedUnion: ExcludedUnion = 'b';
excludedUnion = 'd';
// excludedUnion = 'a'; // Exclude로 제거된 요소이기 떄문에 에러

// 'a' | 'c'
type ExtractedUnion = Extract<TestUnion, 'a' | 'z' | 'c'>;
let extractedUnion: ExtractedUnion = 'a';
extractedUnion = 'c';
// extractedUnion = 'z'; // 에러
// extractedUnion = 'b'; // 에러

// number | 'a' | 'b'
const nonNullable: NonNullable<'a' | null | 'b' | number> = 'a';

interface argInterface1 {
	content: string;
}
function utilityTypeFunction(character: TestUnion, obj: argInterface1, num: number) {
	console.info(character, obj, num);
}
// [TestUnion, argInterface1, number]
// 실제로 선언한 함수의 경우에는 typeof를 앞에 붙여야 한다.
type unilityTypeFunctionParameters = Parameters<typeof utilityTypeFunction>;
// [string]
type stringFunctionParameters = Parameters<(arg: string) => string>;

function f2(arg: number): [number, string] {
	return [arg, `1.${number}`];
}
// [number, string]
type f2ReturnType = ReturnType<typeof f2>;

class InstanceTypeClass {
	number = 1;
}

// type InstaceTypeInstance = InstanceTypeClass;
type InstaceTypeInstance = InstanceType<typeof InstanceTypeClass>;

type XMLHttpRequestMethod = ThisParameterType<XMLHttpRequest>;
// 아래의 함수에서 this의 타입이 XMLHttpRequestMethod로 지정이 되어있는 상태이다.
const XMLHttpRequestMethod: XMLHttpRequestMethod = () => {
	//
};

function toHex(this: number) {
	return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());

console.info(
	constantObject,
	recordObject,
	pickedObject,
	omitedObject,
	excludedUnion,
	extractedUnion,
	nonNullable,
	vueMethods,
);
