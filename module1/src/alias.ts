type UserType = {
  name: string;
  age?: number;
  student: boolean;
  address: string;
};

const user1: UserType = {
  name: "Season",
  age: 23,
  student: true,
  address: "basa",
};
 const user22: UserType = {
  name: "Reason",
  student: false,
  address: "rasta",
};

//example of optional type
type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
