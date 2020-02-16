const path = require('path');
const dotenv = require('dotenv');

exports.variables = () => {
  dotenv.config({
    path: path.resolve(__dirname, '..', '..', '.env'),
  });
};
