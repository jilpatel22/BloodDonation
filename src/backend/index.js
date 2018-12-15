const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/BloodDonationDb',{ useNewUrlParser: true }).then(() => console.log('Mongoose Up'))

//testing connectivity
mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});

const User = require('../schema/dbSchema')

app.use(bodyParser.json())

app.post('/backend/login',(req,res) => {
    const data = req.body;
    const username = data.unm
    const password = data.psw;
    console.log(username)
    console.log(password)
    //const isFound = 
    User.findOne({eid:username,password1:password},(err, user)=>{

        if(err)
        {
            
        }
        if(user){
            console.log("logging in")
            res.json({
                success: true,
                isUser : user.eid,
            });
            //res.status(200).send(user)    
        }
        else{
            console.log('invalid username Password')
            res.json({
                success: false,
            });
            //res.status(401).send("isnot Registered")
        }
    });
    /*if(isFound)
    {
        console.log("logging in")
        res.json({
            success: true,
        });
        res.status(200).send(data)
    }
    else{
        console.log('invalid username Password')
        res.json({
            success: false,
        });
        res.status(401).send("Cannot Registered")   
    }*/
    })
app.post('/backend/register',function(req,res){
    console.log('in post')
    console.log(req.body)
    var userData=req.body
    var user=new User(userData)
    user.save((err,registerUser)=>{
        if(err)
            res.status(401).send("Cannot Registered")
        else
            res.status(200).send(registerUser)
    })
    console.error();
    
})

app.post('/backend/getDetails',function(req,res){
    console.log('in post')
    console.log(req.body.unm1)
    var username=req.body.unm1
    User.findOne({eid:username},(err, user)=>{

        if(err)
        {
            
        }
        if(user){
            console.log("logging in")
            res.status(200).send(user)    
        }
        else{
            console.log('invalid username Password')
            res.json({
                success: false,
            });
            //res.status(401).send("isnot Registered")
        }
    });
    
})
app.post('/backend/updateUser',function(req,res){
    console.log('in updateUser')
    console.log(req.body)
    var userData=req.body
    console.log(req.body)
    //var user=new User(userData)
    
    User.updateOne({ eid: req.body.eid },req.body,(err,user)=>{
        if(err)
            res.status(401).send("Cannot Registered")
        else{
            console.log(user)
            res.status(200).send(user)
        }
            
    })
    console.error();
    
})
app.get('/backend/getAllUser',function(req,res){
    console.log('in getAllUser')
       
    User.find({},(err,user)=>{
        if(err)
            res.status(401).send("Cannot Registered")
        else{
            console.log(user)
            res.status(200).send(user)
        }
            
    })
    console.error();
    
})
app.post('/backend/searchUser',function(req,res){
    console.log('in searchUser')
    var x = req.body;
    console.log(x);
    if(x.b==="Select your Blood Group" && x.a ==="Select your Area") {
        User.find({},(err,user)=>{
            if(err)
                res.status(401).send("Cannot Registered")
            else{
                console.log(user)
                res.status(200).send(user)
            }
                
        })
    }
    else if(x.b !=="Select your Blood Group" && x.a ==="Select your Area"){
        User.find({bloodgroup: x.b},(err,user)=>{
            if(err)
                res.status(401).send("Cannot Registered")
            else{
                console.log(user)
                res.status(200).send(user)
            }
                
        })
    }
    else if(x.b ==="Select your Blood Group" && x.a !=="Select your Area"){
        User.find({"adress.city" : x.a },(err,user)=>{
            if(err)
                res.status(401).send("Cannot Registered")
            else{
                console.log(user)
                res.status(200).send(user)
            }
                
        })
    }
    else{
        User.find({bloodgroup: x.b,  "adress.city" : x.a },(err,user)=>{
            if(err)
                res.status(401).send("Cannot Registered")
            else{
                console.log(user)
                res.status(200).send(user)
            }
                
        })
    }
    
    console.error();
    
})

app.listen(8000,()=>console.log('server is on 8000'));