

var tDAO = require("./tsdao");
//var domain = require("./domain");

var mytDAO = tDAO.create();

var testMsg = mytDAO.test();

console.log("test message" + testMsg);