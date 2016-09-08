
function Tweet(date, text, author, replies, likes, tid) {
    this.tid = tid;
	this.date = date;
    this.text = text;
    this.author = author;
    this.replies = replies;
	this.likes = likes;
    this.tmessage = function() {return this.date + " " + this.text + " " + this.author + " " + this.replies + " " + this.like;};
}

function User(profile, name, tweets, followers, following, dms, retweets, uid) {
    this.uid = uid;
	this.profile = profile;
    this.name = name;
    this.tweets = tweets;
    this.followers = followers;
	this.following = following;
	this.dms = dms;
	this.retweets = retweets;
    this.tuser = function() {return this.profile + " " + this.name + " " + this.tweets + " " 
	                         + this.followers + " " + this.following + " " + this.dms + " " + this.retweets;};
}

module.exports = {
    createTweet: function(date, text, author, replies, likes, tid) {
	return new Tweet(date, text, author, replies, likes, tid);},
	
	createUser: function(profile, name, tweets, followers, following, dms, retweets, uid) {
	return new User(profile, name, tweets, followers, following, dms, retweets, uid);}
   
}