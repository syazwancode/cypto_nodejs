// hash-based message authentication code
// hash but also need a password / key, eg: JWT
const { createHmac } = require("crypto");

const key = "super-secret!";
const message = "boo 👻";

const hmac = createHmac("sha256", key).update(message).digest("hex");

const hmac1 = createHmac("sha256", key).update(message).digest("hex");

const key2 = "other-password";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

// same key will generate same hash
console.log(hmac === hmac1);

// different key will generate different hash
console.log(hmac === hmac2);
