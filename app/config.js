var mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production')
  // Getting no response froM Azure MongoDB
  mongoose.connect('mongodb://mmm:p0ptartz@apollo.modulusmongo.net:27017/ywu3dezI');
else
  mongoose.connect('mongodb://localhost/my_database');

var db = mongoose.connection;

module.exports = mongoose;
