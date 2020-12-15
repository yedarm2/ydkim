export const number = (min = 0, max = 1) => Math.floor(Math.random() * max - min) + min;

export const string = (stringLength = 11) => Math.random().toString(36).substr(2, stringLength);
