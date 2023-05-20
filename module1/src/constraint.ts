type mandatoryType = { name: string; age: number };

const addMyDataFromDB = <T extends mandatoryType>(data: T) => {
  const number = 12345;
  const newData = { ...data, number };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
};

const myInfoHere: MyInfoType = {
  name: "Season",
  age: 123456789,
};

const resultHere = addMyDataFromDB(myInfoHere);
