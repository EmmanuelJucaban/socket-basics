var moment = require('moment');
var now = moment();



var timestamp = 1450649598887;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));