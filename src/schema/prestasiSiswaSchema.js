const { Joi } = require("celebrate");

const insertPrestasiSiswaSchema = Joi.object()
  .keys({
    ID_PRESTASI_SISWA: Joi.string().max(5).optional(),
    PRESTASI_ID: Joi.string().max(5).optional(),
    ID_SISWA: Joi.number().integer().optional(),
    ID_TINGKAT: Joi.number().integer().optional(),
    NAMA_PRESTASI: Joi.string().max(8).optional(),
    TAHUN: Joi.number(),
    PENYELENGGARA: Joi.string().max(21).optional(),
  })
  .unknown(true);

const viewPrestasiSiswaSchema = Joi.object()
  .keys({
    ID_PRESTASI_SISWA: Joi.string().max(5).optional(),
  })
  .unknown(true);

const updatePrestasiSiswaSchema = Joi.object()
  .keys({
    ID_PRESTASI_SISWA: Joi.string().max(5).optional(),
    PRESTASI_ID: Joi.string().max(5).optional(),
    ID_SISWA: Joi.number().integer().optional(),
    ID_TINGKAT: Joi.number().integer().optional(),
    NAMA_PRESTASI: Joi.string().max(8).optional(),
    TAHUN: Joi.number(),
    PENYELENGGARA: Joi.string().max(21).optional(),
  })
  .unknown(true);

const deletePrestasiSiswaSchema = Joi.object()
  .keys({
    ID_PRESTASI_SISWA: Joi.string().max(5).optional(),
  })
  .unknown(true);

module.exports = {
  insertPrestasiSiswaSchema,
  viewPrestasiSiswaSchema,
  updatePrestasiSiswaSchema,
  deletePrestasiSiswaSchema,
};
