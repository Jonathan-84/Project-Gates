const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project-gates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

module.exports = mongoose.connection;
