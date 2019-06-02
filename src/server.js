const app = require('./app');
const settings = require('../config/app.settings.json');

app.listen(settings.port), () => {
    console.llog('app listening on port ' + settings.port)
};