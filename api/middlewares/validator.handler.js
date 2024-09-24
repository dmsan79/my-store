const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false, convert: false});
    if (error) {
      const errorDetails = error.details.map(detail => detail.message);
      next(error);
    }else {
      next();
    }
  };
}

module.exports = validatorHandler;
