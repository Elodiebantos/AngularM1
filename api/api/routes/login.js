let User = require('../model/user');
let jwt = require('jwt-simple');
let config = require('../config/config')


function addNewUser(req, res) {
    if ((!req.body.utilisateur) || (!req.body.password)) {
      res.json({success: false, msg: "Veuillez enter tous les champs"})
    } else {
      let newUser = User({
        utilisateur: req.body.utilisateur,
        password : req.body.password
      });
      newUser.save(function(err, newUser) {
        if (err) {res.json({success : false, msg: "Echec sauvegarde"})}
        else {res.json({success : true, msg:"Sauvegarde success"})}
      })
    }
}

function login(req, res) {
  console.log("Je suis bien la" + req.body)
  User.findOne({
      utilisateur: req.body.utilisateur
    },
    function (err, user) {
      if (err) throw err;
      if (!user) {
        res.status(403).send({success: false, msg: "Authentification failed, user non trouvée"});
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            let token = jwt.encode(user, config.secret)
            res.json({success: true, token: token})
          } else {
            return res.status(403).send({success: false, msg: "Authentification failed, mauvais mot de passe"})
          }
        })
      }
    })
}
 function getinfo(req, res) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      let token = req.headers.authorization.split(' ')[1]
      let decodedtoken = jwt.decode(token, config.secret)
      return res.json({success: true, msg: "Etudiant N° : " + decodedtoken.utilisateur})
    } else {
      return res.json({success: false, msg:"No Headers Found"})
    }
}


module.exports = {addNewUser, login, getinfo};
