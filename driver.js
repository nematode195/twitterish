

var tDAO = require("./tsdao");
var domain = require("./domain");

var mytDAO = tDAO.create();


//function Tweet(date, text, author, replies, likes, tid)
var testTweet = domain.createTweet("Feb02", "I love node", "Mike", "5", "0", "1");
mytDAO.addTweet(testTweet)

mytDAO.selectAll();



var testMsg = mytDAO.test();

console.log("test message" + testMsg);

var tweet = domain.createTweet("fred");
var user = domain.createUser("joe");

console.log(tweet.tmessage());
console.log(user.tuser());

