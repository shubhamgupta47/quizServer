var mongoose = require('mongoose')

var questionSchema = mongoose.Schema({
    question:{type:String ,require:true},
    option1:{type:String ,require:true},
    option2:{type:String ,require:true},
    option3:{type:String ,require:true},
    option4:{type:String ,require:true},
},{collection:'questions'})  

module.exports = mongoose.model('questions',questionSchema);