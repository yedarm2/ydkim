// TODO: 에러 클래스들을 어떻게 처리할까...
export class NotFoundException extends Error {
	constructor() {
		super('찾을 수 없는 데이터입니다.');
	}
}
