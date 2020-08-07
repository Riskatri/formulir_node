const { Joi } = require("celebrate");

const insertAlasanKeluarSchema = Joi.object()
  .keys({
    ID_ALASAN: Joi.number().integer().required(),
    KELUAR_KARNA: Joi.string().max(20).required(),
  })
  .unknown(true);

const viewAlasanKeluarSchema = Joi.object()
  .keys({
    ID_ALASAN: Joi.number().integer().required(),
  })
  .unknown(true);

const updateAlasanKeluarSchema = Joi.object()
  .keys({
    ID_ALASAN: Joi.number().integer().required(),
    KELUAR_KARNA: Joi.string().max(20).required(),
  })
  .unknown(true);

const deleteAlasanKeluarSchema = Joi.object()
  .keys({
    ID_ALASAN: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertAlasanKeluarSchema,
  viewAlasanKeluarSchema,
  updateAlasanKeluarSchema,
  deleteAlasanKeluarSchema,
};
