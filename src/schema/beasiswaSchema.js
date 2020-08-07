const { Joi } = require("celebrate");

const insertBeasiswaSiswaSchema = Joi.object()
  .keys({
    BEASISWA_ID: Joi.string().max(5).optional(),
    ID_SISWA: Joi.number().integer().optional(),
    ID_JENIS_BEASISWA: Joi.number().integer().optional(),
    KETERANGAN: Joi.string().max(28).optional(),
    TAHUN_MULAI: Joi.number().optional(),
    TAHUN_SELESAI: Joi.number().optional(),
  })
  .unknown(true);

const viewBeasiswaSiswaSchema = Joi.object()
  .keys({
    ID_SISWA: Joi.number().integer().optional(),
  })
  .unknown(true);

const updateBeasiswaSiswaSchema = Joi.object()
  .keys({
    BEASISWA_ID: Joi.string().max(5).optional(),
    ID_SISWA: Joi.number().integer().optional(),
    ID_JENIS_BEASISWA: Joi.number().integer().optional(),
    KETERANGAN: Joi.string().max(28).optional(),
    TAHUN_MULAI: Joi.number().optional(),
    TAHUN_SELESAI: Joi.number().optional(),
  })
  .unknown(true);

const deleteBeasiswaSiswaSchema = Joi.object()
  .keys({
    ID_SISWA: Joi.number().integer().optional(),
  })
  .unknown(true);

module.exports = {
  insertBeasiswaSiswaSchema,
  viewBeasiswaSiswaSchema,
  updateBeasiswaSiswaSchema,
  deleteBeasiswaSiswaSchema,
};
