const express = require('express');
const app = express();
const axios = require('axios');
const call =require('./app.cjs');
const fs = require("fs");

const path = require('path')
let h;
const sl = async(req,res,next)=>{
    //  h=await call();
    res.send(`${await call()}`);
    // return h;
next() 
}
 

let y;
app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'./first.html')
    res.sendFile(path.resolve(__dirname, './views/index.html'))
    // res.write('<h1>hello</h1>')

    // res.write('<a target="_blank" href ="./first.html"><input type="button" value="Submit" `></a>    ')

    // res.end();  
})

app.get('/first.html',sl,async (req,res)=>{
    // y =await sl();
    // res.end(); 


})

app.listen(5000);
