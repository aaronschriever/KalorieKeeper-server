const User = require("./../models/user");
const appSettings = require("./../../config/app.settings.json");
const bcrypt = require("bcrypt");

async function addUser(username, password) {
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

async function checkUserExists(username) {
  return new Promise((resolve, reject) => {
    User.find({ username: username }, (err, result) => {
      console.log(result);
      let exists;
      if (result.length !== 0) {
        console.log("user already exists");
        console.log(`result: ${result}`);
        exists = true;
      } else {
        console.log(`${username} does not exist`);
        exists = false;
      }
      resolve(exists);
    });
  });
}

async function user(req, res, next) {
  // console.log(req);
  if (!req.body.username || !req.body.password) {
    console.error("no username or password");
    return res.status(401).json({ error: "missing credentials" });
  }
  try {
    let searchUser = await checkUserExists(req.body.username);

    if (!searchUser) {
      console.log(`adding user ${req.body.username}`);
      addUser(req.body.username, req.body.password);
      return res.send(`signed in as  ${req.body.username}`);
    } else {
      return res.status(401).json({ error: "user already exists" });
    }
  } catch (err) {
    console.error(err);
  }

  // console.log(` user exists? ${checkUserExists(req.body.username)}`);
}

module.exports = user;
