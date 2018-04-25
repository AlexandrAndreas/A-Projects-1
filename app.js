//var os = require("os");
//var greeting1 = require("./greeting.js");
//var User = require("./user.js");

//var myName = new User("Александр", 46);

//myName.sayHi();

//var userName = os.userInfo().username;

//console.log(`Дата запроса: ${greeting.date}`);
//console.log(greeting.getMessage(userName));

/*console.log(`Hello ${greeting1.name}`);

var greeting2 = require("./greeting.js");
greeting2.name = "Bob";

console.log(`Hello ${greeting2.name}`);

console.log(`Hello ${greeting1.name}`);*/

var welcom = require("./welcom");

//welcom.default.getMoningMessage();
//welcom.default.getEveningMessage();

welcom.getEveningMessage();
welcom.getMoningMessage();