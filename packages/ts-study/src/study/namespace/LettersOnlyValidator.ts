/// <reference path="Validation.ts" />
namespace Validation {
	let lettersRegexp = /^[A-Za-z]+$/;

	export class LettersOnlyValidator implements StringValidator {
		isAcceptable(s: string) {
			return lettersRegexp.test(s);
		}
	}
}
