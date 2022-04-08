import { classNames } from './className';

describe('classNames', () => {
	test('문자열 테스트', () => {
		expect(classNames('class1', 'class2')).toBe('class1 class2');
	});

	test('객체 테스트', () => {
		expect(
			classNames({
				class1: true,
				class2: false,
				class3: false,
				class4: true,
			}),
		).toBe('class1 class4');
	});

	test('배열 테스트', () => {
		expect(classNames(['class-a', 'class-b'])).toBe('class-a class-b');
	});

	test('복합 테스트', () => {
		expect(classNames('class1', ['class2', 'class3'])).toBe('class1 class2 class3');

		expect(
			classNames('class1', ['class2', 'class3'], {
				class3: false,
				class4: true,
			}),
		).toBe('class1 class2 class3 class4');
	});
});
