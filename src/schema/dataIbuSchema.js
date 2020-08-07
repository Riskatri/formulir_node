const { Joi } = require("celebrate");

const insertDataIbuSchema = Joi.object()
  .keys({
    ID_IBU: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    ID_KH: Joi.number().integer().optional(),
    ID_PEKERJAAN: Joi.number().integer().required(),
    ID_PENDIDIKAN: Joi.number().required(),
    NAMA: Joi.string().max(16).required(),
    NIK_IBU: Joi.string().max(31).required(),
    TAHUN_LAHIR: Joi.number().required(),
  })
  .unknown(true);

const viewDataIbuSchema = Joi.object()
  .keys({
    ID_IBU: Joi.string().max(5).required(),
  })
  .unknown(true);

const updateDataIbuSchema = Joi.object()
  .keys({
    ID_IBU: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    ID_KH: Joi.number().integer().optional(),
    ID_PEKERJAAN: Joi.number().integer().required(),
    ID_PENDIDIKAN: Joi.number().required(),
    NAMA: Joi.string().max(16).required(),
    NIK_IBU: Joi.string().max(31).required(),
    TAHUN_LAHIR: Joi.number().required(),
  })
  .unknown(true);

const deleteDataIbuSchema = Joi.object()
  .keys({
    ID_IBU: Joi.string().max(5).required(),
  })
  .unknown(true);

module.exports = {
  insertDataIbuSchema,
  viewDataIbuSchema,
  updateDataIbuSchema,
  deleteDataIbuSchema,
};
