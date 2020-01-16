var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultSchema = mongoose.Schema({
    result: {type:String ,require:true},
    user_id: {type: Schema.Types.ObjectId, ref: 'user' ,require:true},
    quiz_id: {type: Schema.Types.ObjectId, ref: 'quiz' ,require:true}
},{collection:'result'})  

module.exports = mongoose.model('result',resultSchema);