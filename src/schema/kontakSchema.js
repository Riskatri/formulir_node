const { Joi } = require("celebrate");

const insertKontakSchema = Joi.object()
  .keys({
    ID_KONTAK: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    NO_TELP: Joi.string().max(12).optional(),
    NO_HP: Joi.string().max(12).optional(),
    EMAIL: Joi.string().email().max(256).optional(),
  })
  .unknown(true);

const viewKontakSchema = Joi.object()
  .keys({
    ID_KONTAK: Joi.string().max(5).required(),
  })
  .unknown(true);

const updateKontakSchema = Joi.object()
  .keys({
    ID_KONTAK: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    NO_TELP: Joi.string().max(12).optional(),
    NO_HP: Joi.string().max(12).optional(),
    EMAIL: Joi.string().email().max(256).optional(),
  })
  .unknown(true);

const deleteKontakSchema = Joi.object()
  .keys({
    ID_KONTAK: Joi.string().max(5).required(),
  })
  .unknown(true);

module.exports = {
  insertKontakSchema,
  viewKontakSchema,
  updateKontakSchema,
  deleteKontakSchema,
};
