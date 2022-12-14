const mongoose = require("mongoose");
var bcrypt = require("bcrypt");

const userschema = new mongoose.Schema({
  utilisateur: {
    type : String,
    required : true,
    unique : true,
    max : 8,
    min: 8,
  },
  password : {
    type : String,
    required : true,
    max : 2048,
    min: 4,
  }
});

userschema.pre('save', function (next) {
  var user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
      })
    })
  }
  else {
    return next()
  }
})

userschema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

module.exports = mongoose.model('User', userschema)


