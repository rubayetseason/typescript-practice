type Manush = {
  name: string;
  age: number;
  address: {
    city: "No city";
    home: "No home";
  };
};

const manush1: Manush = {
  name: "a",
  age: 123,
  address: {
    city: "No city",
    home: "No home",
  },
};

const homeOfManush1 = manush1?.address?.home ?? "have home";
