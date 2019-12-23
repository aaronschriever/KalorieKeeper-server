const User = require("./../models/user");
const appSettings = require("./../../config/app.settings.json");
const bcrypt = require("bcrypt");
const checkUserExists = require("./checkUserexists");

async function signin(req, res, next) {
  console.log(`signing in as ${req.body.username}`);
  try {
    let user = await checkUserExists(req.body.username);
    if (user) {
      userDoc = await User.find({ username: req.body.username });
      console.log(userDoc[0].hash);
      let match = await bcrypt.compare(req.body.password, userDoc[0].hash);
      if (match) {
        return res.send(`user: ${req.body.username} signed in succesfully`);
      }
    }
  } catch (err) {
    console.error(err);
    return res.send("error with signin");  
}

  
}

module.exports = signin;
