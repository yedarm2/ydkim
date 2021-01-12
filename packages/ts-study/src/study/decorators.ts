// * newProperty라는 프로퍼티를 추가하고 value를 넣는 클래스를 반환하는 데코레이터
function classDecorator(value: string) {
	return function<T extends { new (...args: any[]): {} }>(target: T) {
		return class extends target {
			newProperty = value;
		}
	}
}

function enumerable(value: boolean) {
	return function(target: any, propertyName: string, descriptor: PropertyDescriptor) {
		descriptor.enumerable = value;
	}
}

@classDecorator('test')
class DecoratedClass1 {
	constructor (public property: string) {}

	@enumerable(true)
	methods1() {
		return this.property;
	}

	@enumerable(false)
	methods2() {
		return this.property;
	}
}
