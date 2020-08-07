const { Joi } = require("celebrate");

const insertRegistrasiSchema = Joi.object()
  .keys({
    REGISTRASI_ID: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    ID_PENDAFTARAN: Joi.number().integer().required(),
    TANGGAL_MASUK: Joi.date().required(),
    NIS: Joi.string().max(10).optional(),
    NOMOR_PESERTA_UJIAN: Joi.string().max(31).optional(),
    NO_SERI_IJAZAH: Joi.string().max(27).optional(),
    NO_SERI_SKUHS: Joi.string().max(27).optional(),
  })
  .unknown(true);

const viewRegistrasiSchema = Joi.object()
  .keys({
    REGISTRASI_ID: Joi.string().max(5).required(),
  })
  .unknown(true);

const updateRegistrasiSchema = Joi.object()
  .keys({
    REGISTRASI_ID: Joi.string().max(5).required(),
    ID_SISWA: Joi.number().integer().required(),
    ID_PENDAFTARAN: Joi.number().integer().required(),
    TANGGAL_MASUK: Joi.date().required(),
    NIS: Joi.string().max(10).optional(),
    NOMOR_PESERTA_UJIAN: Joi.string().max(31).optional(),
    NO_SERI_IJAZAH: Joi.string().max(27).optional(),
    NO_SERI_SKUHS: Joi.string().max(27).optional(),
  })
  .unknown(true);

const deleteRegistrasiSchema = Joi.object()
  .keys({
    REGISTRASI_ID: Joi.string().max(5).required(),
  })
  .unknown(true);

module.exports = {
  insertRegistrasiSchema,
  viewRegistrasiSchema,
  updateRegistrasiSchema,
  deleteRegistrasiSchema,
};
