const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', ()=> console.log('MongoDB is connected'));
mongoose.connection.on('error', err=> console.error('Mongo error:', err));

module.exports = mongoose;
