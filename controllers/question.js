var express = require('express')
var router = express.Router()
var questionsModel = require('../model/questionModel');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

// module.exports = function(app) {
//     app.get('/ques', questions.saveQuestion);
// }

router.get('/save', function (req, res) {
    try{
        const question = "Ques";
        const option1 = "Op 1";
        const option2 = "Op 2";
        const option3 = "Op 3";
        const option4 = "Op 4";
        
        //Make post entry for save the data 
        const saveQuestion = new questionsModel({
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
        })
        console.log(saveQuestion);
        res.send(saveQuestion);
        saveQuestion.save(function(err,result){
            if(err){
                res.status(404).send({message:"bad request"})
            }
            console.log('Saved');
        })
    }
    catch(e){
        res.status(404).send(e);
    } 
})

module.exports = router;