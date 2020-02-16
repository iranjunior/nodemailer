/* eslint-disable no-console */

const logger = (request, response, next) => {
  console.log('request: ', JSON.stringify(request.body));
  next();
  console.log('response: ', JSON.stringify(response.body));
};

module.exports = logger;
