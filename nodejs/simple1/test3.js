var msg = require("./test3a.js");
console.log(msg.Message);
console.log("--------");
console.log("testString");
console.log('---------');
console.log(testObject.msg);
console.log("----------");
//msg.foo is undefined bc modules.exports hasnt been defined in test3a to
//include it. 
console.log(msg.foo)
//
console.log("this is the foo1 object:",msg.foo1);
console.log(msg.foo1());
