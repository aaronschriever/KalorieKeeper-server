const User = require("./../models/user");
const cookieName = require("./../../config/app.settings.json").cookie.name;
async function addCookie(username, hash, cookieString) {
  return new Promise((resolve, reject) => {
    try {
      User.findOne({ username: username }, (err, result) => {
        if (err) reject(err);
      }).updateOne(
        { cookies: [{ [cookieName]: hash }, { cookieString: cookieString }] },
        (err, response) => {
          if (err) console.error(err);
          resolve(response);
        }
      );
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
}
module.exports = addCookie;
