// tsdao(sqlite) then you can put in fake db for testing
//Load modules
var sqlite3 =  require('sqlite3').verbose();

function tDAO() {
    var db =  new sqlite3.Database('./tweet1.sqlite');
	const TWEET_TABLE = "tweetid1";
	
 // not worried about asynchronous yet
	this.addTweet = function(t) {
		
	     //db.all("INSERT INTO tweetid1(tid,date,text,author,replies,likes) VALUES(t.tid,t.date,t.text,t.author,t.replies,t.likes)", 
		 
		 var tidString = t.tid;
		 console.log("tidString " + tidString);
		 
		 db.all('INSERT INTO tweetid1(tid,date,text,author,replies,likes) VALUES(?,?,?,?,?,?)', t.tid, t.date,t.text,t.author,t.replies, t.likes,
		 //db.run('INSERT INTO tweetid1(tid,date,text,author,replies,likes) VALUES(? ,t.date,t.text,"he","he","he")', 
		 
		 function (err, row) {
			 if (err) {                
			 console.log("addTweet error" + err); 
			 }			 
		 console.log(row);
		
    });
    }
	
	// not worried about asynchronous yet
	this.selectAll = function() {
	     db.all("SELECT * FROM tweetid1", function (err, row) {
			 if (err) {                
			 console.log("selectAll error" + err); 
			 }			 
		 console.log(row);
		
    });
    
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