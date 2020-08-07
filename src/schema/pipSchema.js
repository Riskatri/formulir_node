const { Joi } = require("celebrate");

const insertPipSchema = Joi.object()
  .keys({
    ID_PIP: Joi.number().integer().required(),
    ALASAN: Joi.string().max(50).required(),
  })
  .unknown(true);

const viewPipSchema = Joi.object()
  .keys({
    ID_PIP: Joi.number().integer().required(),
  })
  .unknown(true);

const updatePipSchema = Joi.object()
  .keys({
    ID_PIP: Joi.number().integer().required(),
    ALASAN: Joi.string().max(50).required(),
  })
  .unknown(true);

const deletePipSchema = Joi.object()
  .keys({
    ID_PIP: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertPipSchema,
  viewPipSchema,
  updatePipSchema,
  deletePipSchema,
};
