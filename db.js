

const mongoose=require("mongoose");

function dbconnection(){

    mongoose.connect('mongodb://localhost:27017/authentication')
    .then(()=>{

        console.log('db connected successfuly')
    })
    .catch((err)=>{

        console.log('error while connecting to db',err);
    })

};

module.exports=dbconnection();