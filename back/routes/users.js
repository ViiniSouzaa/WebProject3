var express = require('express');
var router = express.Router();
const userDAO = require('../model/user');

/* GET users listing. */
router.get('/', function(req, res) {
    res.end('USERS');
});

router.post('/login', async (req, res) => {
  var resToken = await userDAO.authUser(req.query.email, req.query.password);
  console.log(resToken.token);
    if(resToken.token != undefined){
      res.json({auth : true, token : resToken.token, admin : resToken.admin});
    }else res.json({auth : false, token : null});
});

router.post('/register', async (req, res) => {
  console.log(req.query.email);
  var exists = await userDAO.UserRegister(req.query.email, req.query.password);
    if(exists){
      res.json({insert : false, msg : "Email ja cadastrado"});
    }else {
      res.json({insert : true, msg : "usuario cadastrado"});
    }
});


module.exports = router;
