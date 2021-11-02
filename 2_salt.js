const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

let users = [];

const signup = (email, password) => {
  // salt technique will add random value before it hash
  const salt = randomBytes(16).toString("hex");
  //scrypt to hash
  const hashedPassword = scryptSync(password, salt, 64).toString("hex");

  const user = { email, password: `${salt}:${hashedPassword}` };

  users.push(user);

  return user;
};

signup("user@email.com", "Password123");

const login = (email, password) => {
  const user = users.find((v) => v.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  // to prevent time attack
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  let res = match ? "login success!" : "login fail!";

  return console.log(res);
};

// login success
login("user@email.com", "Password123");

// login fail
login("user@email.com", "Password999");
