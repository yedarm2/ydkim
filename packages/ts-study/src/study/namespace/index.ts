/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];
import ZipCodeValidator = Validation.ZipCodeValidator;
// Validators to use
let validators: { [s: string]: Validation.StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// const lettersOnlyVaidator = new Validation.LettersOnlyValidator();
// const zipCodeValidator = new Validation.ZipCodeValidator();

// * let lettersRegExp는 export를 하지 않아서 사용할 수 없다.
// Validation.lettersRegExp.text('abc');

// Show whether each string passed each validator
for (let s of strings) {
	for (let name in validators) {
		let isMatch = validators[name].isAcceptable(s);
		console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
	}
}
