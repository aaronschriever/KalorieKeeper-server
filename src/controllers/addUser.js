const User = require("./../models/user");
const appSettings = require("./../../config/app.settings.json");
const bcrypt = require("bcrypt");
const checkUserExists = require("./checkUserexists");

async function handleUser(username, password) {
  var hash = await bcrypt.hash(password, appSettings.salt_rounds, function(
    err,
    hash
  ) {
    if (err) {
      console.log("something went wrong!" + err);
    }
    console.log(`creating user:  ${username}`);
    console.log(`hash created: ${hash}`);

    const newUser = new User({ username: username, hash: hash });

    newUser.save(function(err, newUser) {
      if (err) return console.error(err);
      console.log("user created: " + newUser);
    });
  });
}

async function addUser(req, res, next) {
  // console.log(req);
  if (!req.body.username || !req.body.password) {
    console.error("no username or password");
    return res.status(401).json({ error: "missing credentials" });
  }
  try {
    let searchUser = await checkUserExists(req.body.username);

    if (!searchUser) {
      console.log(`adding user ${req.body.username}`);
      handleUser(req.body.username, req.body.password);
      return res.send(`signed in as  ${req.body.username}`);
    } else {
      return res.status(401).json({ error: "user already exists" });
    }
  } catch (err) {
    console.error(err);
  }

  // console.log(` user exists? ${checkUserExists(req.body.username)}`);
}

module.exports = addUser;
