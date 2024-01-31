const express = require('express');

const router = express.Router();
 



router.post('/register', (req, res) => {
     

 
    UserModel.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  });



router.post('/login' , (req , res) =>{

    const {email , password} = req.body;

    UserModel.findOne({email : email})
    .then(user => {

        if(user){

            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Password Incorrect")
            }
        }else{
            res.json("User Not Registered")
        }
    })

})


module.exports = router;