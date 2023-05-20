// //we have to create an interface for the gotten data
// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// //JSON PLACEHOLDER
// const getTodo = async (): Promise<ITodo> => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   return data;
// };

// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// };

// //call the function
// getTodoData();

// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fetched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("failed to fetch");
//     }
//   });
// };

// const result1 = makePromise();

// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   console.log(data);
//   return data;
// };

// export default {
//   makePromise,
//   getPromiseData,
//   getTodoData,
// };
