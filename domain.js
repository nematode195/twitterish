
function Tweet(date, text, author, replies, like) {
    this.date = date;
    this.text = text;
    this.author = author;
    this.replies = replies;
	this.like = like;
    this.tmessage = function() {return this.date + " " + this.text + " " + this.author + " " + replies + " " + like;};
}


function User(profile, name, tweets, followers, following, dms, retweets ) {
    this.profile = profile;
    this.name = name;
    this.tweets = tweets;
    this.followers = followers;
	this.following = following;
	this.dms = dms;
	this.retweets = retweets;
    this.tuser = function() {return this.profile + " " + this.name + " " + this.tweets + " " 
	                         + followers + " " + following + " " + dms + " " + retweets;};
}