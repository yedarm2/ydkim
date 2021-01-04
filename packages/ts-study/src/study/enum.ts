enum Directive {
	Up = 1,
	Down, // 2
	Left = 5,
	Right, // 6
}

enum State {
	Success = 'SUCCESS',
	Fail = 'FAIL',
}

function printStateSuccess(obj: { Success: string }) {
	console.info(obj.Success);
}

printStateSuccess(State);

type DirectiveString = keyof typeof Directive;
const directive: DirectiveString = 'Down';

function printDirective(key: DirectiveString) {
	const value = Directive[key];
	if (value === Directive.Up) {
		console.info('This is Up');
	}
}
printDirective('Up');
console.log(Directive[Directive.Right]); // 6

const enum constantEnum {
	one = 1,
	two = 2,
	three = 3,
}

const constantEnumList = [constantEnum.one, constantEnum.two, constantEnum.three];

console.info(Directive.Down, State.Success, directive, constantEnumList);
