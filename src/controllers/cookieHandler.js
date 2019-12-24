const bcrypt = require("bcrypt");
const appSettings = require("./../../config/app.settings.json");
const User = require("./../models/user");
const addCookie = require("./addCookie");

async function cookieHandler(req, res, next) {
  let cookieString = Date.now() + req.body.username;
  console.log(cookieString);

  let hash = await bcrypt.hash(cookieString, appSettings.salt_rounds, function(
    err,
    hash
  ) {
    if (err) console.error(err);
    try {
      //console.log(User.where({ username: req.body.username }));
      let user = addCookie(req.body.username, hash);
      console.log(`making cookies  for ${req.body.username}!! nom nom nom`);
      console.log(`user: ${user.username}`);
    } catch (err) {
      console.error(err);
    }
  });
  try {
    //
    
}
catch (err) { console.error(err);

}
  next();
}
module.exports = cookieHandler;
