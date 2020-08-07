const { Joi } = require("celebrate");

const insertTransportSchema = Joi.object()
  .keys({
    ID_TRANSPORTASI: Joi.number().integer().required(),
    JENIS: Joi.string().max(50).required(),
  })
  .unknown(true);

const viewTransportSchema = Joi.object()
  .keys({
    ID_TRANSPORTASI: Joi.number().integer().required(),
  })
  .unknown(true);

const updateTransportSchema = Joi.object()
  .keys({
    ID_TRANSPORTASI: Joi.number().integer().required(),
    JENIS: Joi.string().max(50).required(),
  })
  .unknown(true);

const deleteTransportSchema = Joi.object()
  .keys({
    ID_TRANSPORTASI: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertTransportSchema,
  viewTransportSchema,
  updateTransportSchema,
  deleteTransportSchema,
};
