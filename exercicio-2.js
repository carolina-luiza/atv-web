const data = require("./data.js");

const pessoas = data.filter(data.gender.include(female) && data.age>=18);
    //data => data.gender.includes('Female') => data.age >= 18);

console.table(pessoas);