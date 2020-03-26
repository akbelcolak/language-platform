const router = require("express").Router();
const { User} = require("../models/users.modle");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err=> res.status(400).send('Error : '+ err));
});
router.route("/add").post(async(req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const birthdate = req.body.birthdate;

  const newUser = new User({
    username,
    email,
    password,
    birthdate
  });
  newUser
    .save()
    .then(() => res.json("User Created!"))
    .catch(err => res.status(400).json("Error :" + err));
    
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user Deleted"))
    .catch(err => res.status(400).json("Error :" + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      user.birthdate = Date.parse(req.body.birthdate);

      user
        .save()
        .then(() => res.json("User Updated!"))
        .catch(err => res.status(400).json("Error :" + err));
    })
    .catch(err => res.status(400).json("Error :" + err));
});
module.exports = router;
