const bcrypt = require("bcrypt");
const appSettings = require("./../../config/app.settings.json");
//const User = require("./../models/user");
const getUser = require("./getUser");
const addCookie = require("./addCookie");

async function createHash(username, res) {
  try {
    let cookieString = Date.now() + username;
    console.log(cookieString);
    var hash = await bcrypt.hash(
      cookieString,
      appSettings.salt_rounds,
      (error, result) => {
        console.log(`result: ${result}`);
         
        if (error) console.log(error);
        addCookie(username, result, cookieString);
        console.log(`cookie hash created: ${result}`);
        res.cookie(appSettings.cookie.name, result, {
            maxAge: 900000,
            httpOnly: true
          });
        return result;
      }
    );
  } catch (err) {
    console.error(err);
  }
}

async function cookieHandler(req, res, next) {
  try {
    let user = await getUser(req.body.username).then((error, response)=>{
if (error) console.log(error);
if (response === null) {
    let hash = createHash(req.body.username);
    addCookie(req.body.username, hash);
  }
    });

    console.log(`cookie: ${user}`);
  } catch (error) {
    console.error(error);
  }

  //check if cookie already exists

  let sessionCookie = req.cookies.kksession;
  console.log(`sessionCookie: ${sessionCookie}`);
  if (sessionCookie !== undefined) {
    // console.log(`cookie: ${cookie.cookies.kksession}`);
    console.log("found a cookie!");

    //bcrypt.compare
    //check cookie is valid else create new cookie;
  } else {
    try {
      let hash;
      await createHash(req.body.username, res).then((error, result) => {
        if (error) console.log(error);
        
        console.log(`creating hash ${result}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
  next();
}
module.exports = cookieHandler;
