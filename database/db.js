const mysql=require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"blogapp"
  });
  con.connect(function(err){
      if (err) throw err
    console.log("Database is connected");  
    var sql = "CREATE TABLE details(name varchar(255) ,email varchar(255),password VARCHAR(255), confirmpassword varchar(255))" ;
    con.query(sql,function(err,result){
        if (err) {
            console.log("Already table is there");
        }else{console.log("Table is Created")};
    
    })
})
module.exports = con;

