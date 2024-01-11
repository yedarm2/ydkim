export class NotFoundException extends Error {
	constructor() {
		super('찾을 수 없는 데이터입니다.');
	}
}
