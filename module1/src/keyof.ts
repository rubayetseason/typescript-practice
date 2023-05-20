type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKey = keyof PersonType;

const a: newType = "address";
const b: newTypeUsingKey = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const data = getProperty({ name: "x", age: 123456789 }, "age");
