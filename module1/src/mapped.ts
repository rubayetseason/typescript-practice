// const arrayOfNumbers = [1, 2, 3];
// const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());

type Volume = {
  height: number;
  width: string;
  depth: number;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ name: string }> = { name: "season"};
