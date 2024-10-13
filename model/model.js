

const mongoose=require('mongoose');

const scema= new mongoose.Schema({

    name:{
      
        type:String,
        required:true
    },

    age:{

        type:Number
    },
    contact:{

        type:String,
        maxlength:12,
        minlength:12,
        
    },
    email:{

        required:true,
        type:String,
        unique:true
    },
    password:{

        type:String,
        required:true,
        maxlength:8,
        minlength:8
    }
},
{ collection:'sign-up'});

const mdl= mongoose.model('user',scema);

module.exports=mdl;