const Joi = require('@hapi/joi');

const Email = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  name: Joi.string().required().min(2).max(33),
  message: Joi.string().required().min(2),
});

module.exports = Email;
