const path = require('path');
const router = require('express').Router();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  info: {
    title: 'Emails with node',
    version: '1.0.0',
    description: 'Serviço de envio de email com nodejs',
  },
  contact: {
    email: 'admin@example.com',
  },
  license: {
    name: 'Private',
    url: 'http://example.com',
  },
  host: 'api.example.com',
  basePath: '/',
  schemes: [
    'http',
    'https',
  ],
};

const options = {
  swaggerDefinition,
  // the first element of the array is the request models and the second is the response models
  apis: [`${path.resolve(__dirname, 'v1')}/*.js`],
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
