abstract class Fruit {
	static isFood = true;
	static isAbleToBeEaten() {
		return true;
	}

	_price = 1000;

	constructor(protected readonly name: string) {}

	protected getInfo() {
		return `This is ${this.name}. This price is ${this.price}`;
	}

	abstract introduce(): void;

	get price() {
		return this._price;
	}

	set price(price: number) {
		this._price = price;
	}
}

class Apple extends Fruit {
	yummy: boolean;

	constructor() {
		super('Apple');
		this.yummy = true;
	}

	// * 추상 메서드를 구현하지 않으면 에러 발생
	introduce() {
		console.log(this.getInfo());
		console.log('This is delicious');
	}

	eaten() {
		console.log(`${this.name}: yipe!!`);
	}
}

interface Banana extends Apple {
	color: string;
}

const apple: Fruit = new Apple();

apple.introduce();
(apple as Apple).eaten();
