const User = require('./../models/user');
const appSettings = require('./../../config/app.settings.json');
const bcrypt = require('bcrypt');


async function user(req, res, next) {
   // console.log(req);
   if (!req.body.username || !req.body.password ){
    console.error("no username or password");
return res.status(401).json({"error":"missing credentials"});   
}


console.log(req.body.username);    
console.log(appSettings.salt_rounds);
var hash = bcrypt.hash(req.body.password, appSettings.salt_rounds, function(err, hash) {
    if (err){
        console.log('something went wrong!' + err);
    
    }
    console.log(hash);
 const user = new User()
 user.push("")
});
  
return res.send(`signed in as  ${req.body.username}`);

}

module.exports = user;