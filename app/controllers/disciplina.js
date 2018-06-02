var Matricula = require('../models/matricula.js');

module.exports.listarMatriculas = function(req, res){
    let promise = Matricula.find()
                    .populate('disciplina')
                    .populate('aluno')
                    .exec();
    promise.then(
        function(matriculas){
            res.json(matriculas)
        },
        function(erro){
            res.status(500).send(erro)
        }
    );
}