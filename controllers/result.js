var express = require('express')
var router = express.Router()
var resultModel = require('../model/resultModel');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('/save', function (req, res) {
    try{
        const result = req.body.result;
        const user_id = req.body.user_id;
        const quiz_id = req.body.quiz_id;
        console.log(req.body);
        
        //Make post entry for save the data 
        const saveResult = new resultModel({
            result,
            user_id,
            quiz_id,
        })
        saveResult.save(function(err,result){
            if(err){
                res.status(404).send({message:"bad request"})
            }
            console.log('Saved');
            res.status(200).send('Saved');
        })
    }
    catch(e){
        res.status(404).send(e);
    } 
})

router.get('/getAll', function(req, res) {
    try {
        resultModel.find({}).populate('user_id quiz_id', 'name category').exec(function (err, rslt) {
            if (err) console.log(err)
            res.status(200).send(rslt);

        });
    }
    catch(e){
        res.status(404).send(e);
    } 
})

module.exports = router;