const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model/model');
const router = express.Router();

// Use body-parser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));





router.get('/s', (req, resp) => {

    resp.render('singup', { details: null, message: null });
})




router.get('/', (req, resp) => {



    resp.render('portfolio');
})


router.post('/submit', async (req, resp) => {

    console.log('Received data:', req.body);



    try {

        const details = {

            name: req.body.name,
            age: req.body.age,
            contact: req.body.contact,
            email: req.body.email,
            password: req.body.password
        };

        const existingcontact = await model.findOne({ contact: details.contact })

        if (existingcontact) {

            return resp.render('singup', { details, message: "contact already exists. please use a different contact number." })
        }

        const existingemail = await model.findOne({ email: details.email })

        if (existingemail ) {

            return resp.render('singup', { details, message: "email already exists. please use a different email." })
        }

        
        await model.create(details);
        resp.redirect('/use/l');
    }
    catch (err) {

        console.log('error while inserting data to db.', err);
    }


})





router.get('/l', (req, resp) => {

    resp.render('login',{data:null,message:null});
});

router.post('/loginsubmit',async(req,resp)=>{


    try{

      const  email=req.body.email;
       const password=req.body.password;
     

        const data={
          email,
          password
          
        }
    
        const existingemail=await model.findOne({email});


        if(existingemail && existingemail.password===data.password )
        {

            resp.redirect('/use/');
        }
        else{

            resp.render('login',{data,message:'wrong email or password.'})
            console.log(data)
        }
    }
    catch(err){

              console.log('error while redirecting to portfolio.=',err)
    }

})


module.exports = router;