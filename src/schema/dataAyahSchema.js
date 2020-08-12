const { Joi } = require("celebrate");

const insertDataAyahSchema = Joi.object()
  .keys({
    ID_AYAH: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    ID_KH: Joi.number().integer().optional(),
    ID_PEKERJAAN: Joi.number().integer().required(),
    ID_PENDIDIKAN: Joi.number().required(),
    ID_PENGHASILAN: Joi.number().required(),
    NAMA: Joi.string().max(16).required(),
    NIK_AYAH: Joi.string().max(31).required(),
    TAHUN_LAHIR: Joi.number().required(),
  })
  .unknown(true);

const viewDataAyahSchema = Joi.object()
  .keys({
    ID_AYAH: Joi.string().max(5).required(),
  })
  .unknown(true);

const updateDataAyahSchema = Joi.object()
  .keys({
    ID_AYAH: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    ID_KH: Joi.number().integer().optional(),
    ID_PEKERJAAN: Joi.number().integer().required(),
    ID_PENDIDIKAN: Joi.number().required(),
    ID_PENGHASILAN: Joi.number().required(),
    NAMA: Joi.string().max(16).required(),
    NIK_AYAH: Joi.string().max(31).required(),
    TAHUN_LAHIR: Joi.number().required(),
  })
  .unknown(true);

const deleteDataAyahSchema = Joi.object()
  .keys({
    ID_AYAH: Joi.string().max(5).required(),
  })
  .unknown(true);

module.exports = {
  insertDataAyahSchema,
  viewDataAyahSchema,
  updateDataAyahSchema,
  deleteDataAyahSchema,
};
