let admin = require('../../models/admin');
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');


router.route('/')
.post(function(req, res) {
  let admin = new Admin();// create a new Admin
  admin.email = req.body.email;
  admin.username = req.body.username;
  admin.password = req.body.password;

  Admin.find({username: req.body.username},function(err, admins) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find of admins!'});
    }
    if (admins.length > 0) {
      return res.json({status: 'ERROR', message: 'Username already exist!'});
    }

    bcrypt.hash(admin.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      admin.password = hash;
      admin.save(function (err) {
        if (err) {
          return res.json({ status: 'ERROR', message: 'Error in creation of admin!' });
        }
        return res.json({ status: 'SUCCESS', message: 'Admin created!' });
      });
    });
  });
})


