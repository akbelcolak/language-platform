const router = require("express").Router();
let User = require("../models/users.modle");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).send("Error : " + err));
});
router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const address = req.body.address;
  const nativeLanguage = req.body.nativeLanguage;
  const gender = req.body.gender;
  const languageToLearn = req.body.languageToLearn;
  const phoneNumber = req.body.phoneNumber;
  const skill = req.body.skill;
  const email = req.body.email;
  const password = req.body.password;
  const birthdate = req.body.birthdate;

  const newUser = new User({
    firstName,
    lastName,
    address,
    nativeLanguage,
    gender,
    languageToLearn,
    phoneNumber,
    skill,
    email,
    password,
    birthdate
  });
  newUser
    .save()
    .then(() => res.json("User Created!"))
    .catch(err => res.status(400).json("Error add:" + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error get(:id): " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user Deleted"))
    .catch(err => res.status(400).json("Error :" + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      firstName = req.body.firstName;
      lastName = req.body.lastName;
      address = req.body.address;
      nativeLanguage = req.body.nativeLanguage;
      gender = req.body.gender;
      languageToLearn = req.body.languageToLearn;
      phoneNumber = req.body.phoneNumber;
      skill = req.body.skill;
      email = req.body.email;
      password = req.body.password;
      user.birthdate = Date.parse(req.body.birthdate);
      user
        .save()
        .then(() => res.json("User Updated!"))
        .catch(err => res.status(400).json("Error :" + err));
    })
    .catch(err => res.status(400).json("Error :" + err));
});

module.exports = router;
