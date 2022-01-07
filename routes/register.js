var express = require('express');
// const app = require('../app');
var router = express.Router();
const bodyParser =require('body-parser');
const con=require("../database/db")


/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/register',(req,res)=>{
  var name=req.body.name
  var email=req.body.email
  var password=req.body.password
  var confirmpassword=req.body.confirmpassword
  console.log(name,email,password,confirmpassword);
  var sql =`insert into details values('${name}','${email}','${password}','${confirmpassword}')`
        con.query(sql,(err,result)=>{
            if (err) throw err;
            // res.send("<h1> Data is inserted </h1>")
            res.send (`<h1> welcome in Dashboard ${name}</h1> <a href="http://localhost:3000/" class="btn btn-secondary">Logout</a>
            <p> see distict Value <a href="http://localhost:3000/distinct" class="btn btn-secondary">Distinct</a> </p>`)
        })


    })
    router.get('/distinct',(req,res)=>{
      var sql=` select distinct  name from details;`;
      con.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result)
      })
    })
    router.get
  

module.exports=router

