const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");

let users = [];

const signup = (email, password) => {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64).toString("hex");

  const user = { email, password: `${salt}:${hashedPassword}` };

  users.push(user);

  return user;
};

console.log(signup("syazwan@gmail.com", "syaz9889"));

const login = (email, password) => {
  const user = users.find((v) => v.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  return match ? "login success!" : "login fail";
};

console.log(login("syazwan@gmail.com", "syaz9880"));
