const models = require("./server.js").models;

// This find method and inside it if not found create it (create method)

// models.user.find((err, result) => {
//     if (result.length >= 0) {
//       const user = {
//         firstName: "Hamdan",
//         lastName: "Deeb",
//         location: "Brussels",
//         nativeLanguage: "Arabic",
//         languageToLearn: "French",
//         phoneNumber: "0032465442421",
//         Gender: "male",
//         email: "Hamdan.domain@domain.com",
//         password: "test123",
//         birthdate: "1991-04-26",
//         skill: "Coding...Only"
//       };
//       models.user.create(user, (err, result) => {
//         console.log("err", err, "result", result);
//       });
//     }
//   });

//This method if find Or Create profile by email field

// models.Profile.findOrCreate({ email: "sexy@sexy.net" }, (err, profile) => {
//   if (err) {
//     console.log("there is an error", err);
//   } else if (profile) {
//     (profile.email = "hamdan.domain@domain.com"),
//       profile.save((ue, updated) => {
//         console.log("updated!", updated);
//       });
//   }
// });

const filter = {
  where: {
    email: { like: "hamdan" }
    // postCount:{gte:2}
  },
  order: "id ASC",
  limit: 10
};
// This way to find by id and parameters => first is the id of user ,
// Second is the filter Object of what are we looking for 
models.user.findById("5e84fd9f078acd08203a02d7",filter,(err, user)=>{
    console.log("error:",err,"User",user)
})

//This method to find exist user by filter Object

// models.Profile.find(filter, (err, found) => {
//   if (err) {
//     console.log("There is error :", err);
//   } else {
//     console.log("Found", found);
//   }
// });


//WAYS to delete Data :-

//1- delete the user by findById then delete it by user.destroy()
//models.user.findById("5e84fd9f078acd08203a02d7",filter,(err, user)=>{
//    console.log("error:",err,"User",user)
//     user.destroy()
//})

//2- this way will delete the user which fine by filter.where expression then destroy() it by user.destroy()
//models.user.destroyAll(fitler.where,(err, user)=>{
//    console.log("error:",err,"User",user)
//     user.destroy()
//})

//3- by this we delete the users and all his posts literally get out of here haha
//models.user.findById("5e84fd9f078acd08203a02d7",{inclue:'Posts'},(err, user)=>{
//    console.log("error:",err,"User",user)
//     user.Posts.destroyAll(date:{gte: new Date('2019-02-04')})
//})