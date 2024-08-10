const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  window: process.env.WINDOW,
  max_limit: process.env.MAX_LIMIT,
  port: process.env.PORT,
  secret: process.env.SECRET,
  mongo_string: process.env.MONGO_URI,
};
