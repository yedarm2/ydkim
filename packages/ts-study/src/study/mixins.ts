class MixinClass1 {
	age = 10;
}

class MixinClass2 {
	money = 10;
}

class Sprite {
	x = 0;
	y = 0;

	constructor(public name: string) {}

	setPosition(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

function scale<TBase extends new (...args: any[]) => any>(Base: TBase) {
	return class extends Base {
		_scale = 1;

		setScale(scale: number) {
			this._scale = scale;
		}

		get scale() {
			return this._scale;
		}
	};
}

function jumpable<
	TBase extends new (...args: any[]) => { setPosition(x: number, y: number): void }
>(Base: TBase) {
	return class extends Base {
		jump() {
			this.setPosition(0, 20);
		}
	};
}

// * 현재 형태의 코드는 자바스크립트에서만 유효하므로 javascript에도 유효한 별도의 코드를 놓을 필요가 있다.
interface Sprite extends MixinClass1, MixinClass2 {}

const ScaledSprite = jumpable(scale(Sprite));
const sprite = new ScaledSprite('');
sprite.setScale(100);
sprite.jump();
console.log(sprite.scale, sprite.x, sprite.y, sprite.name, sprite.money, sprite.age);
