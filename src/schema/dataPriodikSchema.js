const { Joi } = require("celebrate");

const insertDataPriodikSchema = Joi.object()
  .keys({
    ID_DATA_PRIODIK: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),

    TINGGI_BADAN: Joi.number().integer().required(),
    BERAT_BADAN: Joi.number().required(),
    JARAK_KE_SEKOLAH: Joi.number().required(),
    WAKTU_TEMPUH_KE_SEKOLAH: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    JUMLAH_SAUDARA_KANDUNG: Joi.number().required(),
  })
  .unknown(true);

const viewDataPriodikSchema = Joi.object()
  .keys({
    ID_DATA_PRIODIK: Joi.string().max(5).required(),
  })
  .unknown(true);

const updateDataPriodikSchema = Joi.object()
  .keys({
    ID_DATA_PRIODIK: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),

    TINGGI_BADAN: Joi.number().integer().required(),
    BERAT_BADAN: Joi.number().required(),
    JARAK_KE_SEKOLAH: Joi.number().required(),
    WAKTU_TEMPUH_KE_SEKOLAH: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/),
    JUMLAH_SAUDARA_KANDUNG: Joi.number().required(),
  })
  .unknown(true);

const deleteDataPriodikSchema = Joi.object()
  .keys({
    ID_DATA_PRIODIK: Joi.string().max(5).required(),
  })
  .unknown(true);

module.exports = {
  insertDataPriodikSchema,
  viewDataPriodikSchema,
  updateDataPriodikSchema,
  deleteDataPriodikSchema,
};
