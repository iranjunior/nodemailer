const router = require('express').Router();
const email = require('./email');

router.use(email);

module.exports = router;
