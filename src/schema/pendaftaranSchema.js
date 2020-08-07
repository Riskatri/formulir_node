const { Joi } = require("celebrate");

const insertPendaftaranSchema = Joi.object()
  .keys({
    ID_PENDAFTARAN: Joi.number().integer().required(),
    JENIS: Joi.string().max(20).required(),
  })
  .unknown(true);

const viewPendaftaranSchema = Joi.object()
  .keys({
    ID_PENDAFTARAN: Joi.number().integer().required(),
  })
  .unknown(true);

const updatePendaftaranSchema = Joi.object()
  .keys({
    ID_PENDAFTARAN: Joi.number().integer().required(),
    JENIS: Joi.string().max(20).required(),
  })
  .unknown(true);

const deletePendaftaranSchema = Joi.object()
  .keys({
    ID_PENDAFTARAN: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertPendaftaranSchema,
  viewPendaftaranSchema,
  updatePendaftaranSchema,
  deletePendaftaranSchema,
};
