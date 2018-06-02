let express = require('express');
let alunoRouter = require('../app/routes/alunos.js');
//let disciplinaRouter = require('../app/routes/disciplinas.js');
let bodyParser = require('body-parser');
const path = require('path');

module.exports = function(){
    var app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(express.static('./public'));
    alunoRouter(app);
    //disciplinaRouter(app);
    app.get('*',(req, res) =>{
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    return app;
};