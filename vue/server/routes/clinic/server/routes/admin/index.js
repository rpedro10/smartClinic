let Admin = require('../../models/admin');
let Doctor = require('../../models/doctor');
let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

router.route('/')
.post(function(req, res) {
  let admin = new Admin();// create a new Admin
  admin.email = req.body.email;
  admin.username = req.body.username;
  admin.password = req.body.password;
  admin.status = 'ACTIVE';

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
.get(function(req, res) {// get all admins
  Admin.find({},function(err, admins) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in find of admins!'});
    }
    return res.json({status: 'SUCCESS', message: 'List all admins!', object: admins});
  });
});

router.route('/:id')
.delete(function (req, res) {// delete specific admin
  Admin.remove({ _id: req.params.id }, function (err) {
    if (err) {
      return res.json({ status: 'ERROR', message: 'Error in removing admin!' });
    }
    else {
      res.json({ status: 'SUCCESS', message: 'Admin deleted!' });
    }
  });
})
.get(function(req, res) {// get specific admin
  Admin.findOne({_id: req.params.id}, function(err, admin) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in get specific admin!'});
    }
    return res.json({status: 'SUCCESS', message: 'Found specific admin!', object: admin});
  });
})
.put(function (req, res) {// update specific admin
  Admin.findOne({ _id: req.params.id }, function (err, admin) { // get admin
    Admin.findOne({ username: req.body.username, _id: { $ne: req.params.id } }, function (err, adminduplicated) { // see if admin duplicated
      if (adminduplicated == null) {
        for (prop in req.body) {
          admin[prop] = req.body[prop]
        }

        if (req.body.password) {
          let plainPassword = req.body.password;

          bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
              return next(err)
            }
            admin.password = hash

            // save the admin
            admin.save(function (err) {
              if (req.body.password) {
                admin.password = plainPassword;
              }
              return res.json({
                status: 'SUCCESS',
                message: 'Updated specific admin!',
                object: admin,
              });
            });
          });
        } else {
          // save the admin
          admin.save(function (err) {
            return res.json({
              status: 'SUCCESS',
              message: 'Updated specific admin!',
              object: admin,
            });
          });
        }
      } else {
        return res.json({
          status: 'ERROR',
          message: 'Username already exists!'
        });
      }
    });
  });
});

module.exports = router;
