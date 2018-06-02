var Aluno = require('../models/aluno.js');

module.exports.inserirAluno = function(req, res){
    let promise = Aluno.create(req.body)
    promise.then(
        function(contato){
            res.status(201).json(contato);
        },
        function(erro){
            res.status(500).json(erro);
        }
    );
}

module.exports.listaAlunos = function(req, res){
    let promise = Aluno.find().exec();
    promise.then(
        function(alunos){
            res.json(alunos);
        },
        function(erro){
            res.status(500).end();
        }
    );
}

module.exports.obterAluno = function(req,res){
    var id = req.params.id;
    var aluno = alunos.find(aluno => (aluno._id==id));
    if(aluno){
        res.json(aluno);
    }else{
        res.status(404).send('Aluno nao encontrado');
    }
};