const { Joi } = require("celebrate");

const insertDaftarKeluarSchema = Joi.object()
  .keys({
    DAFTAR_KELUAR_ID: Joi.string().max(5).optional(),
    ID_SISWA: Joi.number().integer().optional(),
    ID_ALASAN: Joi.number().integer().optional(),
    TANGGAL_KELUAR: Joi.date().optional(),
    ALASAN: Joi.string().max(31).optional(),
  })
  .unknown(true);

const viewDaftarKeluarSchema = Joi.object()
  .keys({
    DAFTAR_KELUAR_ID: Joi.string().max(5).optional(),
  })
  .unknown(true);

const updateDaftarKeluarSchema = Joi.object()
  .keys({
    DAFTAR_KELUAR_ID: Joi.string().max(5).optional(),
    ID_SISWA: Joi.number().integer().optional(),
    ID_ALASAN: Joi.number().integer().optional(),
    TANGGAL_KELUAR: Joi.date().optional(),
    ALASAN: Joi.string().max(31).optional(),
  })
  .unknown(true);

const deleteDaftarKeluarSchema = Joi.object()
  .keys({
    DAFTAR_KELUAR_ID: Joi.string().max(5).optional(),
  })
  .unknown(true);

module.exports = {
  insertDaftarKeluarSchema,
  viewDaftarKeluarSchema,
  updateDaftarKeluarSchema,
  deleteDaftarKeluarSchema,
};
