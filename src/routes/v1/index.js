const router = require('express').Router();
const email = require('./emails');
const { validate } = require('../../middleware');

router.use(validate, email);

module.exports = router;
