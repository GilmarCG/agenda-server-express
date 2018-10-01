var Contato = require('../models/contato');
module.exports.buscaTodos = function(req, res){
    Contato.find().exec()
    .then (
        function(contatos){
            res.jason(contatos);
        },
        function(erro){
            console.log(erro);
            res.status(500).jason(erro);
        }
    );
};