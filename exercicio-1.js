const data = require("./data.js");

const idades = age.map(data => `${data.first_name} idade: ${Number(data.age)}`);

console.table(idades);