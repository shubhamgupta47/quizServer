var express = require('express')
var router = express.Router()
var quizModel = require('../model/quizModel');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('/save', function (req, res) {
    try{
        const category = req.body.category;
        const data = req.body.data;
        
        //Make post entry for save the data 
        const saveQuiz = new quizModel({
            category: category,
            data: data,
            
        })
        console.log(saveQuiz);
        res.send(saveQuiz);
        saveQuiz.save(function(err,result){
            if(err){
                res.status(404).send({message:"bad request"})
            }
        })
    }
    catch(e){
        res.status(404).send(e);
    } 
})

router.get('/getCategory', function(req, res) {
    try {
        quizModel.find({}, 'category').exec(function (err, rslt) {
            if (err) console.log(err)
            console.log(rslt);
            res.status(200).send(rslt);

        });
    }
    catch(e){
        res.status(404).send(e);
    } 
})

router.post('/getQuiz', function(req, res) {
    try {
        const quizId = req.body.quizId;
        quizModel.find({_id: quizId}).exec(function (err, rslt) {
            if (err) console.log(err)
            console.log(rslt);
            res.status(200).send(rslt);
        });
    }
    catch(e){
        res.status(404).send(e);
    } 
})

module.exports = router;