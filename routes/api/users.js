const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

//load User model
const User = require("../../models/User");

// @route get api/users/test
//@desc Test users route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "User Works" }));

// @route get api/users/reqister
//@desc Register users
//@access Public
router.post("/register", (req, res) =>
  User.findone({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exist" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //Size
        r: "pg", //rating
        d: "mm" //default
      });
      const nerUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.passward


        
      });

      bcrypt.genSalt(10, (err, Salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.passward = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  })
);

module.exports = router;
