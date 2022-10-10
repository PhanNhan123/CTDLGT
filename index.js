const express = require("express");
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello')
})
var a= 10 ;
var b = 11;
app.listen(3000, ()=>{
    console.log(`Server is running on port: 3000`)
})