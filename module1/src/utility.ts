interface Person {
  name: string;
  email: string;
  contactNo: string;
}

type EmailType = Pick<Person, "email" | "contactNo">;

type Name = Omit<Person, "email">;

//to make all the properties to optional type
type ReadOnlyType = Readonly<Person>;

type myObjHere = {
  [key: 'a'| 'b' | 'c']: string;
};

type myObj = Record<'a'| 'b' | 'c', string>

const obj: myObjHere = {
  a: "1",
  b: "2",
  c: "3",
};
