const User = require("./../models/user");
const cookieName = require("./../../config/app.settings.json").cookie.name;
async function addCookie(username, hash) {
  return new Promise((resolve, reject) => {
    try {
      User.findOne({ username: username }, (err, result) => {
        if (err) reject(err);
      }).updateOne({ cookies: { cookieName: hash } }, (err, response) => {
        if (err) console.error(err);
        resolve(response);
      });
    } catch {
      console.error(err);
      reject(err);
    }
  });
}
module.exports = addCookie;
