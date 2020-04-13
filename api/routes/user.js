const router = require("express").Router();
let User = require("../models/users.modle");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).send("Error : " + err));
});

router.route("/auth").post((req, res)=>{
  const email = req.body.email;
  const password = req.body.password;
User.findOne({email:email, password:password},(err,user)=>{
if(err){
  console.log(err)
  return res.status(500).send()
}
if(!user){
  return res.status(404).send()
}
return res.status(200).send()
})
});

router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const location = req.body.location;
  const nativeLanguage = req.body.nativeLanguage;
  const Gender = req.body.Gender;
  const languageToLearn = req.body.languageToLearn;
  const phoneNumber = req.body.phoneNumber;
  const skill = req.body.skill;
  const email = req.body.email;
  const password = req.body.password;
  const birthdate = req.body.birthdate;

  const newUser = new User({
    firstName,
    lastName,
    location,
    nativeLanguage,
    Gender,
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
    .catch( err => res.status(400).json(`this E-mail has already registerd`));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error get(:id): " + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("user Deleted"))
    .catch(err => res.status(400).json("Delete/:id :" + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      firstName = req.body.firstName;
      lastName = req.body.lastName;
      location = req.body.location;
      nativeLanguage = req.body.nativeLanguage;
      Gender = req.body.Gender;
      languageToLearn = req.body.languageToLearn;
      phoneNumber = req.body.phoneNumber;
      skill = req.body.skill;
      email = req.body.email;
      password = req.body.password;
      user.birthdate = Date.parse(req.body.birthdate);
      user
        .save()
        .then(() => res.json("User Updated!"))
        .catch(err => res.status(400).json("update/:id",err ));
    })
    .catch(err => res.status(400).json(err="Error :" ));
});



module.exports = router;
