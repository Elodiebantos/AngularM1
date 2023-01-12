let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let login = require('./routes/login');
const cors = require("cors");
let passport = require('passport')
let mongoose = require('mongoose');
const {setDriver} = require("mongoose");
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);
//MongoParseError: option usefindandmodify is not supported

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud
//const uri = 'mongodb+srv://ElodieBantos:Password@cluster0.x4makfe.mongodb.net/assignments?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://tototititata972:8Htkuwu4bB3S3d9@cluster0.fixav9l.mongodb.net/?retryWrites=true&w=majority';
const uri = 'mongodb+srv://hugo:hugo@cluster0.wsjqds1.mongodb.net/?retryWrites=true&w=majority';


app.use(cors());

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });



// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// pour jwt
app.use(passport.initialize())
require('./config/passport')(passport)

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
  .get(assignment.getAssignments);

app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);

app.route(prefix + '/assignments')
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);

app.route(prefix + '/register')
  .post(login.addNewUser)
app.route(prefix + '/login')
  .post(login.login)
app.route(prefix + '/getinfo')
  .get(login.getinfo)



// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


