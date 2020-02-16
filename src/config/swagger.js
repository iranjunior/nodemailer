const router = require('express').Router();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  info: {
    title: 'Serviço de envio de email com nodejs',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // the first element of the array is the request models and the second is the response models
  apis: ['../src/routes/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

router.use('/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
