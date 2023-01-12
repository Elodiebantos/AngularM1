let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require('mongoose-aggregate-paginate-v2');
let AssignmentSchema = Schema({
    id: Number,
    auteur: String,
    matiere: String,
    nom: String,
    dateDeRendu: Date,
    rendu: Boolean,
    reminder: Boolean,
    note: { type: Number, min: 0.0, max: 20.0 },
    remarque: String,
    photoProf: String
});
AssignmentSchema.plugin(aggregatePaginate);

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
