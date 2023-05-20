// type genericArray<T> = Array<T>;
// type NameRollType = { name: string; roll: number };

// const rollNumber: genericArray<number> = [1, 2, 3, 4, 5];
// const nameArray: genericArray<string> = ["abc", "def", "ghi"];
// const booleanArray: genericArray<boolean> = [true, false];
// const userNameAndRoll: genericArray<NameRollType> = [
//   { name: "a", roll: 1 },
//   { name: "b", roll: 2 },
// ];

// type GenericTuple<X, Y> = [X, Y];

// interface IStringAndNumber {
//   name: string;
//   age: number;
// }

// const fullNameObject: GenericTuple<IStringAndNumber, string> = [
//   { name: "abc", age: 234 },
//   "a",
// ];

// interface HumanInterface<T, U = null> {
//   name: string;
//   comment: T;
//   role?: U;
// }

// const human1: HumanInterface<string, string> = {
//   name: "abcd",
//   comment: "abcd",
// };

// const createArray = (param: string): string[] => {
//   return [param];
// };

// const createArrayWithGeneric = <T, U>(param1: T, param2: U): [T, U] => {
//   return [param1, param2];
// };

// const result1 = createArrayWithGeneric<string, string>("Bangladesh", "Amar desh");

// const addMyData = <T>(data: T) => {
//   const number = 12345;
//   const newData = { ...data, number };
//   return newData;
// };

// const myInfo = {
//   name: "Season",
//   age: 123456789,
// };

// const result = addMyData(myInfo);
