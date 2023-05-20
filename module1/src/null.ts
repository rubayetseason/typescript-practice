const searchName = (value: string | null) => {
  if (value === null) {
    console.log("nothing found");
  } else {
    console.log("user found");
  }
};

searchName(null);

const speedCar = (speed: unknown) => {
  if (typeof speed === "number") {
    console.log(speed * 10);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const newSpeed = parseInt(value) * 10;
    console.log(newSpeed);
  }
};

speedCar(10);
speedCar("10 kmh");

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Error hoyeche");
