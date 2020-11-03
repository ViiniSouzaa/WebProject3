var express = require('express');
var router = express.Router();
const moedaDAO = require('../model/moeda');

/* GET users listing. */
router.get('/', function(req, res) {
    res.end('MOEDAS');
});

router.post('/addMoeda', async (req,res) =>{
    var insert = await moedaDAO.RegisterMoeda(req.query.sigla, req.query.nome, req.query.valor);
        if(insert){
            res.json({status : insert, msg : 'inserido com sucesso'});
        }
        res.json({status : insert, msg : 'usuario ja cadastrado'});
});

router.get('/findAll', async (req, res) => {
    res.json( await moedaDAO.findAll());
});

router.get('/findConvert', async(req, res) =>{
    res.json(await moedaDAO.find(req.query.moeda1, req.query.moeda2));
});

module.exports = router;
