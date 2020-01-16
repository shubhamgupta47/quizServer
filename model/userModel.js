var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: {type:String ,require:true},
    category_id: {type:String ,require:true},
},{collection:'user'})  

module.exports = mongoose.model('users',userSchema);