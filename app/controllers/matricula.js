var Matricula = require('../models/matricula.js');

module.exports.inserirMatricula = function(req, res){
    let promise = Matricula.create(req.body)
    promise.then(
        function(contato){
            res.status(201).json(contato);
        },
        function(erro){
            res.status(500).json(erro);
        }
    );
}