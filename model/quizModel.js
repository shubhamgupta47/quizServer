var mongoose = require('mongoose')

var quizSchema = mongoose.Schema({
    category: {type:String ,require:true},
    data: [{
        question:{type:String ,require:true},
        option1:{type:String ,require:true},
        option2:{type:String ,require:true},
        option3:{type:String ,require:true},
        option4:{type:String ,require:true},
        answer:{type:Number, require:true},
    }],
    
},{collection:'quiz'})  

module.exports = mongoose.model('quiz',quizSchema);