import * as arrayUtil from './arrayUtil';

test('seperate 테스트', () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const [oddNumbers, evenNumbers] = arrayUtil.seperate(numbers, number => number % 2 === 1);

	expect(oddNumbers).toStrictEqual([1, 3, 5, 7, 9]);
	expect(evenNumbers).toStrictEqual([2, 4, 6, 8, 10]);
});
