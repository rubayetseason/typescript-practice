// // type a = number;
// // type b = a extends string ? string : number;
// // type c = undefined;
// // type d = boolean;

// // type e = a extends string
// //   ? string
// //   : c extends number
// //   ? void
// //   : d extends number
// //   ? number
// //   : string;

// type classRoom = {
//   student1: string;
//   student2: string;
// };

// type CheckStudent<T, K> = K extends keyof classRoom ? true : false;
// type CheckStudent1 = CheckStudent<classRoom, "student2">;
