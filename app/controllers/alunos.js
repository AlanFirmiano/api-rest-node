
let alunos = [
    {
        _id:1,
        nome:'Joao',
        matricula:'123'
    },
    {
        _id:2,
        nome:'Pedro',
        matricula:'234'
    }
];

module.exports.inserirAluno = function(req, res){
    alunos.push(req.body);
    res.status(200).send(req.body);
};

module.exports.listaAlunos = function(req, res){
    res.json(alunos);
};
module.exports.obterAluno = function(req,res){
    var id = req.params.id;
    var aluno = alunos.find(aluno => (aluno._id==id));
    if(aluno){
        res.json(aluno);
    }else{
        res.status(404).send('Aluno nao encontrado');
    }
};