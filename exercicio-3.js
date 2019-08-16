const data = require("./data.js");

var cidade = data.find(data => data.city=='Monroe');
console.table(cidade);