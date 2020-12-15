export const number = (min = 0, max = 1) => Math.floor(Math.random() * max - min) + min;

export const string = () => Math.random().toString(36).substr(2, 11);
