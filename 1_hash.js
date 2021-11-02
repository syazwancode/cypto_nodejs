const { createHash } = require("crypto");

//create a string hash
function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

let password = "hi-mom!";
const hash1 = hash(password);
const hash2 = hash(password);
console.log(hash1);
console.log(hash1 === hash2);
