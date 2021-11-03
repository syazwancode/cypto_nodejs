const { createHash } = require("crypto");

// create a string hash
function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

let password = "myNewPassword123!";
const hash1 = hash(password);
const hash2 = hash(password);

// each hash will result in the same value. not very secure for password.
console.log(hash1 === hash2);

console.log(hash1);
