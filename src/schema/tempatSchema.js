const { Joi } = require("celebrate");

const insertTempatSchema = Joi.object()
  .keys({
    ID_TINGGAL: Joi.number().integer().required(),
    TEMPAT_TINGGAL: Joi.string().max(31).required(),
  })
  .unknown(true);

const viewTempatSchema = Joi.object()
  .keys({
    ID_TINGGAL: Joi.number().integer().required(),
  })
  .unknown(true);

const updateTempatSchema = Joi.object()
  .keys({
    ID_TINGGAL: Joi.number().integer().required(),
    TEMPAT_TINGGAL: Joi.string().max(31).required(),
  })
  .unknown(true);

const deleteTempatSchema = Joi.object()
  .keys({
    ID_TINGGAL: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertTempatSchema,
  viewTempatSchema,
  updateTempatSchema,
  deleteTempatSchema,
};
