// tsdao(sqlite) then you can put in fake db for testing
//Load modules
var sqlite3         =       require('sqlite3').verbose();




function tDAO() {
    var db =  new sqlite3.Database('./tweets.db');

    this.addTweet = function(tweet) {
        db.run("INSERT into table_name(col1,col2,col3) VALUES (val1,val2,val3)");

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

  

module.exports = {
    create: function() {
        return new tDAO();
    }
}


//Perform SELECT Operation
 db.all("SELECT * from blah blah blah where this="+that,function(err,rows){
//rows contain values while errors, well you can figure out.
});

//Perform INSERT operation.
 db.run("INSERT into table_name(col1,col2,col3) VALUES (val1,val2,val3)");

//Perform DELETE operation
 db.run("DELETE * from table_name where condition");

//Perform UPDATE operation
 db.run("UPDATE table_name where condition");