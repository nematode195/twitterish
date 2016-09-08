

var tDAO = require("./tsdao");
var domain = require("./domain");

var mytDAO = tDAO.create()
mytDAO.selectAll();




var testMsg = mytDAO.test();

console.log("test message" + testMsg);

var tweet = domain.createTweet("fred");
var user = domain.createUser("joe");

console.log(tweet.tmessage());
console.log(user.tuser());

