const EmailSchema = require('../utils/shemas/email');

module.exports = async (req, res, next) => {
  try {
    const { error } = await EmailSchema.validateAsync(req.body);
    if (error) { return res.status(400).json({ error }).send(); }
    return next();
  } catch (error) {
    return res.status(400).json({ error }).send();
  }
};
