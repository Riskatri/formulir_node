const { Joi } = require("celebrate");

const insertAgamaSchema = Joi.object()
  .keys({
    ID_AGAMA: Joi.string().max(10).required(),
    JENIS_AGAMA: Joi.string().max(31).required(),
  })
  .unknown(true);

const viewAgamaSchema = Joi.object()
  .keys({
    ID_AGAMA: Joi.string().max(10).required(),
  })
  .unknown(true);

const updateAgamaSchema = Joi.object()
  .keys({
    ID_AGAMA: Joi.string().max(10).required(),
    JENIS_AGAMA: Joi.string().max(31).required(),
  })
  .unknown(true);

const deleteAgamaSchema = Joi.object()
  .keys({
    ID_AGAMA: Joi.string().max(10).required(),
  })
  .unknown(true);

module.exports = {
  insertAgamaSchema,
  viewAgamaSchema,
  updateAgamaSchema,
  deleteAgamaSchema,
};
