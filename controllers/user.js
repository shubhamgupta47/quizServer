var express = require('express')
var router = express.Router()
var userModel = require('../model/userModel');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('/save', function (req, res) {
    try{
        const name = req.body.name;
        const category_id = req.body.category;
        
        //Make post entry for save the data 
        const saveUser = new userModel({
            name: name,
            category_id: category_id,
        })
        saveUser.save(function(err,result){
            if(err){
                res.status(404).send({message:"bad request"})
            }
            res.status(200).send(saveUser._id);
        })
    }
    catch(e){
        res.status(404).send(e);
    } 
})

module.exports = router;