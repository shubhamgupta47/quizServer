var express = require('express')
var router = express.Router()
var questionsModel = require('../model/questionModel');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('/save', function (req, res) {
    try{
        const question = req.body.question;
        const option1 = req.body.option1;
        const option2 = req.body.option2;
        const option3 = req.body.option3;
        const option4 = req.body.option4;
        
        //Make post entry for save the data 
        const saveQuestion = new questionsModel({
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
        })
        res.send(saveQuestion);
        saveQuestion.save(function(err,result){
            if(err){
                res.status(404).send({message:"bad request"})
            }
        })
    }
    catch(e){
        res.status(404).send(e);
    } 
})

module.exports = router;