const User = require("./../models/user");

async function checkUserExists(username) {
  return new Promise((resolve, reject) => {
    User.find({ username: username }, (err, result) => {
      console.log(result);
      if (err) reject(err);
      let exists;

      if (result.length !== 0) {
        console.log(`${username} already exists`);
        //console.log(`result: ${result}`);
        exists = true;
      } else {
        console.log(`${username} does not exist`);
        exists = false;
      }
      resolve(exists);
    });
  });
}

module.exports = checkUserExists;
