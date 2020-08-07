const { Joi } = require("celebrate");

const insertDataWaliSchema = Joi.object()
  .keys({
    ID_WALI: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),

    ID_PEKERJAAN: Joi.number().integer().required(),
    ID_PENDIDIKAN: Joi.number().required(),
    NAMA_WALI: Joi.string().max(16).required(),
    NIK_WALI: Joi.string().max(31).required(),
    TAHUN_LAHIR: Joi.number().required(),
  })
  .unknown(true);

const viewDataWaliSchema = Joi.object()
  .keys({
    ID_WALI: Joi.string().max(5).required(),
  })
  .unknown(true);

const updateDataWaliSchema = Joi.object()
  .keys({
    ID_WALI: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),

    ID_PEKERJAAN: Joi.number().integer().required(),
    ID_PENDIDIKAN: Joi.number().required(),
    NAMA_WALI: Joi.string().max(16).required(),
    NIK_WALI: Joi.string().max(31).required(),
    TAHUN_LAHIR: Joi.number().required(),
  })
  .unknown(true);

const deleteDataWaliSchema = Joi.object()
  .keys({
    ID_WALI: Joi.string().max(5).required(),
  })
  .unknown(true);

module.exports = {
  insertDataWaliSchema,
  viewDataWaliSchema,
  updateDataWaliSchema,
  deleteDataWaliSchema,
};
