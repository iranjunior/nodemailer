const router = require('express').Router();
const swagger = require('./swagger');
const routerV1 = require('./v1');

router.use(swagger);
router.use('/v1', routerV1);


module.exports = router;
