const { Joi } = require("celebrate");

const insertBeasiswaSchema = Joi.object()
  .keys({
    ID_JENIS_BEASISWA: Joi.number().integer().required(),
    JENIS_BEASISWA: Joi.string().max(20).required(),
  })
  .unknown(true);

const viewBeasiswaSchema = Joi.object()
  .keys({
    ID_JENIS_BEASISWA: Joi.number().integer().required(),
  })
  .unknown(true);

const updateBeasiswaSchema = Joi.object()
  .keys({
    ID_JENIS_BEASISWA: Joi.number().integer().required(),
    JENIS_BEASISWA: Joi.string().max(20).required(),
  })
  .unknown(true);

const deleteBeasiswaSchema = Joi.object()
  .keys({
    ID_JENIS_BEASISWA: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertBeasiswaSchema,
  viewBeasiswaSchema,
  updateBeasiswaSchema,
  deleteBeasiswaSchema,
};
