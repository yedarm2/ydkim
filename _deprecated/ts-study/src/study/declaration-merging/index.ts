import { moduleObject } from './module';

interface mergedInterface {
	id: number;
	name: string;
}

interface mergedInterface {
	id: number; // * 이전 선언과 같은 프로퍼티를 넣는다면 타입 역시 동일한 타입을 넣어야한다.
	getName: (ar1?: string) => string;
}

const mergedObj: mergedInterface = {
	id: 1,
	name: 'abc',
	// * 맨 처음 interface 선언에는 존재하지 않지만
	// * 두번 째 선언에서 추가를 했으므로 getName을 넣지 않으면 에러가 발생한다.
	getName: () => 'abc',
};

interface overloadedInterface {
	clone(arg1: number): number;
}

interface overloadedInterface {
	clone(arg1: boolean): boolean;
	clone(arg1: 'p'): HTMLParagraphElement;
}

interface overloadedInterface {
	clone(arg1: string): string;
	clone(arg1: HTMLDocument): HTMLDocument;
	clone(arg1: 'div'): HTMLDivElement;
}

/* overloadedInterface는 아래와 같은 형식으로 취급이 된다.
interface overloadedInterface {
	clone(arg1: 'p'): HTMLParagraphElement;
	clone(arg1: 'div'): HTMLDivElement;
	clone(arg1: number): number;
	clone(arg1: boolean): boolean;
	clone(arg1: string): string;
	clone(arg1: HTMLDocument): HTMLDocument;
}
*/

/* eslint-disable @typescript-eslint/no-namespace */
namespace mergedNamespace {
	export interface namespaceInterface1 {
		id: number;
	}

	export interface namespaceInterface2 {
		name: string;
	}

	interface innerInterface {
		age: number;
	}
}

namespace mergedNamespace {
	export interface namespaceInterface3 {
		number: number;
		obj1: namespaceInterface2;
		// * innerInterface는 별도의 선언에서 export를 하지 않아서 여기에서 사용할 수 없다.
		// obj2: innerInterface;
	}
}

const obj11: Partial<mergedNamespace.namespaceInterface3> = {};

class MergedElement1 {
	element1: MergedElement1.InnerClass;

	constructor() {
		this.element1 = new MergedElement1.InnerClass();
	}
}

namespace MergedElement1 {
	export class InnerClass {}
}

function mergedElement2(str = 'name') {
	return `${mergedElement2.ab} ${str} ${mergedElement2.bc}`;
}

namespace mergedElement2 {
	export const ab = 'ab';
	export const bc = 'bc';
}

enum mergedElement3 {
	red = 'RED',
	blue = 'BLUE',
	green = 'GREEN',
}

namespace mergedElement3 {
	export function innerFunction(): mergedElement3 {
		return mergedElement3.red;
	}
}

console.info(mergedObj, obj11);

declare module './module' {
	interface moduleObject {
		age: number;
	}
}

// * 원래의 선언에는 id 프로퍼티만 정의되어 있지만 위의 보강 선언으로 age도 추가된 상태다.
const object3: moduleObject = {
	id: 10,
	age: 100,
};

declare global {
	interface Array<T> {
		clone(): Array<T>;
	}
}

[1, 2, 3].clone();
/* eslint-enable @typescript-eslint/no-namespace */
