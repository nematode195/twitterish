// tsdao(sqlite) then you can put in fake db for testing
//Load modules
var sqlite3 =  require('sqlite3').verbose();

function tDAO() {
    var db =  new sqlite3.Database('./tweet1.sqlite');
	const TWEET_TABLE = "tweetid1";
	
 //   this.addTweet = function(tweet) {
       
		db.run("INSERT into tweetid1('author') VALUES ('mike')");

 //   }
	
	// not worried about asynchronous yet
	this.selectAll = function() {
		try{
         db.all("SELECT * FROM tweetid1", function (err, row) {
			 if (err) {                
			 console.log("selectAll error" + err); 
			 }			 
		 console.log(row);
		
    });
    }
		 catch(er)
		 {
			console.log("caught error" + e);
		 }
    }
	
	this.test = function() {
        return "test function called";

    }

    this.init = function() {
       
    db.serialize(function() {
        db.run("CREATE TABLE lorem (info TEXT)");

        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (var i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();

        db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
            if (err) {
                console.log(err);
            }
            console.log(row.id + ": " + row.info);
        });
    });

     return this;
    }
}
  

module.exports = {
    create: function() {
        return new tDAO();
    }
}