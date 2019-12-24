const User = require("./../models/user");

async function getUser(username) {
  return new Promise((resolve, reject) => {
    try {
      User.findOne({ username: username }, (err, result) => {
        if (err) reject(err);
       // console.log(`result: ${result}`);
        resolve(result);
      });
    } catch {
      console.error(err);
      reject(err);
    }
  });
}
module.exports = getUser;
