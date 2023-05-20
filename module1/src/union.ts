type NoobDev = {
  name: string;
};

type JuniorDev = NoobDev & {
  experience: number;
};

type MidDev = JuniorDev & {
  phone: number;
};

const newDeveloper: NoobDev | JuniorDev = {
  name: "Season",
};
