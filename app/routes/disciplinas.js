let controller = require('../controllers/disciplina.js');

module.exports = function(app){
    app.get("/api/disciplinas",controller.listarMatriculas);
    //app.get("/api/alunos/:id",controller.obterAluno);
    //app.post('/api/disciplinas',controller.inserirM);
};