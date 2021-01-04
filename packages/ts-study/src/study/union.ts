function unionFunction(array: string[] | number[]): string {
	return array.join(',');
}

interface Apple1 {
	color: 'red';
	taste: 'yummy';
}

interface Mango2 {
	color: 'yellow';
	price: 'expensive';
}

type Fruit1 = Apple1 | Mango2;

const randomFruit1 = (): Fruit1 => {
	const randumNumber = Math.random();
	return randumNumber > 0.5
		? { color: 'yellow', price: 'expensive' }
		: { color: 'red', taste: 'yummy' };
};

const printFruit1 = (fruit1: Fruit1) => {
	if (fruit1.color === 'red') {
		// Apple1 타입으로 취급
		console.info(fruit1.taste);
	} else if (fruit1.color === 'yellow') {
		// Mango2 타입으로 취급
		console.info(fruit1.price);
	}
};

interface phone {
	maker: string;
}

interface samsung {
	country: 'korea';
}

interface apple1 {
	country: 'US';
}

type Galaxy = phone & samsung;
type IPhone = phone & apple1;
const iPhone: IPhone = {
	maker: 'apple1',
	country: 'US',
};

console.info(
	'unionFunction(1,2,3,4,5), unionFunction(a, b, c, d), fruit1.taste',
	unionFunction([1, 2, 3, 4, 5]),
	unionFunction(['a', 'b', 'c', 'd']),
);
