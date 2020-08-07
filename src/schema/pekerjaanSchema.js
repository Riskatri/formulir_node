const { Joi } = require("celebrate");

const insertPekerjaanSchema = Joi.object()
  .keys({
    ID_PEKERJAAN: Joi.number().integer().required(),
    JENIS_PEKERJAAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const viewPekerjaanSchema = Joi.object()
  .keys({
    ID_PEKERJAAN: Joi.number().integer().required(),
  })
  .unknown(true);

const viewAllPekerjaanSchema = Joi.object()
  .keys({
    JENIS_PEKERJAAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const updatePekerjaanSchema = Joi.object()
  .keys({
    ID_PEKERJAAN: Joi.number().integer().required(),
    JENIS_PEKERJAAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const deletePekerjaanSchema = Joi.object()
  .keys({
    ID_PEKERJAAN: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertPekerjaanSchema,
  viewPekerjaanSchema,
  updatePekerjaanSchema,
  deletePekerjaanSchema,
  viewAllPekerjaanSchema,
};
