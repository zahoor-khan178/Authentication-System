
const express=require('express');
const routes=require('./routing');
const mdl1=require('./model/model');
const dbconnection=require('./db');
const path=require('path');


routes.use(express.json());


console.log(dbconnection);



const app=express();

app.use(express.urlencoded({ extended: true }));

app.use("/use",routes);



app.set('view engine','ejs');
const viewpath=path.join(__dirname,'views');
app.set('views',viewpath);



const publicpath=path.join(__dirname,'public');
app.use(express.static(publicpath));
















app.listen(8000,async()=>{

    try{
           console.log('server is running on port 8000');
    }
    catch{
           console.log('server is not started');
    }
})