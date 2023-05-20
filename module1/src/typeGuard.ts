// in guard

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

const normalUser1: NormalUserType = { name: "mr. user" };
const adminUser1: AdminUserType = { name: "mr. user", role: "admin" };

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return "I am an admin";
  } else {
    return "I am a normal user";
  }
}

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
