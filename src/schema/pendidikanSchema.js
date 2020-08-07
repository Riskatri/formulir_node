const { Joi } = require("celebrate");

const insertPendidikanSchema = Joi.object()
  .keys({
    ID_PENDIDIKAN: Joi.number().integer().required(),
    JENJANG_PENDIDIKAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const viewPendidikanSchema = Joi.object()
  .keys({
    ID_PENDIDIKAN: Joi.number().integer().required(),
  })
  .unknown(true);

const updatePendidikanSchema = Joi.object()
  .keys({
    ID_PENDIDIKAN: Joi.number().integer().required(),
    JENJANG_PENDIDIKAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const deletePendidikanSchema = Joi.object()
  .keys({
    ID_PENDIDIKAN: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertPendidikanSchema,
  viewPendidikanSchema,
  updatePendidikanSchema,
  deletePendidikanSchema,
};
