const models = require("../language-partner/server/server.js").models;

models.users.findOrCreate({
  firstName: "Hamdan",
  lastName: "Deeb",
  location: "Brussels",
  nativeLanguage: "Arabic",
  languageToLearn: "French",
  phoneNumber: "0032465442421",
  Gender: "male",
  email: "Hamdan.domain@domain.com",
  password: "test123",
  birthdate: "1991-04-26",
  skill: "Coding...Only"
},(err, user)=>{
    if (err) {
        console.log("There is error :", err);
      } else {
        console.log("Found", user);
      }
});

models.Profile.findOrCreate({ email: "sexy@sexy.net" }, (err, profile) => {
  if (err) {
    console.log("there is an error", err);
  } else if (profile) {
    (profile.email = "hamdan.domain@domain.com"),
      profile.save((ue, updated) => {
        console.log("updated!", updated);
      });
  }
});

const filter = {
  where: {
    email: { like: "hamdan" }
    // postCount:{gte:2}
  },
  order: "id ASC",
  limit: 10
};

models.Profile.find(filter, (err, found) => {
  if (err) {
    console.log("There is error :", err);
  } else {
    console.log("Found", found);
  }
});
