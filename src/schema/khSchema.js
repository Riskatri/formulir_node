const { Joi } = require("celebrate");

const insertKhSchema = Joi.object()
  .keys({
    ID_KH: Joi.number().integer().required(),
    JENIS_KH: Joi.string().max(31).required(),
  })
  .unknown(true);

const viewKhSchema = Joi.object()
  .keys({
    ID_KH: Joi.number().integer().required(),
  })
  .unknown(true);

const updateKhSchema = Joi.object()
  .keys({
    ID_KH: Joi.number().integer().required(),
    JENIS_KH: Joi.string().max(31).required(),
  })
  .unknown(true);

const deleteKhSchema = Joi.object()
  .keys({
    ID_KH: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertKhSchema,
  viewKhSchema,
  updateKhSchema,
  deleteKhSchema,
};
