let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

//const clinic = require('../models/clinic');
const admin = require('../models/admin');


process.env.SECRET_KEY = 'secret';

// POST route for login
router.route('/login')
    .post(function (req, res) {
/**
        let ad = new admin({
            username: 'rp',
            password: '123',
            email: 'email@'
        }); 
        ad.save();
        console.log(ad);
        */
        console.log(req.body);
        admin.find({ username: req.body.username }, function (err, admin) {
            if (err) {
                return res.json({ status: 'ERROR', message: 'Username not found!' });
            }
            else {
                bcrypt.compare(req.body.password, admin.password,
                    function (err, result) {
                        if (result === true) {
                            res.json({
                                status: 'Success',
                                message: 'correct password for ' + admin.username,
                                user: admin,
                            })
                        }
                        else {
                            res.json({
                                status: 'ERROR',
                                message: 'Wrong password for username ' + admin.username
                            });
                        }
                    }
                )
            }
        })
    });

// GET for logout
router.route('/logout')
    .get(function (req, res) {

    });

module.exports = router;