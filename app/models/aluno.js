var mongoose = require('mongoose');
module.exports = function(){
    var schema = mongoose.Schema({
        nome:{
            type: String,
            require: true
        },
        matricula:{
            type: String,
            require: true
        }
    });
    return mongoose.model('Aluno', schema);
}();