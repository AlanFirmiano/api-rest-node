var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        alunos:{
            type: mongoose.Schema.ObjectId,
            ref: 'Aluno'
        },
        disciplinas:{
            type: mongoose.Schema.ObjectId,
            ref: 'Disciplina'
        }
    });
    return mongoose.model('Matricula', schema);
}();