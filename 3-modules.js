// CommomJS , every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


const { john ,peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alernative-flavour");
require("./7-mind-grenade"); //Only works when module is not exported but is imported so it invokes the function.

// console.log(data);
// sayHi('susan');
// sayHi(john);
// sayHi(peter);