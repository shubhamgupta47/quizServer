var mongoose = require('mongoose');

mongoose.connect('mongodb://happy:happy1@ds157521.mlab.com:57521/demoquiz',{ useNewUrlParser: true, useUnifiedTopology:true } ,(err)=>{
    if(err)
    console.log(err)
});