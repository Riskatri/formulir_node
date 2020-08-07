const { Joi } = require("celebrate");

const insertPenghasilanSchema = Joi.object()
  .keys({
    ID_PENGHASILAN: Joi.number().integer().required(),
    PENGHASILAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const viewPenghasilanSchema = Joi.object()
  .keys({
    ID_PENGHASILAN: Joi.number().integer().required(),
  })
  .unknown(true);

const updatePenghasilanSchema = Joi.object()
  .keys({
    ID_PENGHASILAN: Joi.number().integer().required(),
    PENGHASILAN: Joi.string().max(31).required(),
  })
  .unknown(true);

const deletePenghasilanSchema = Joi.object()
  .keys({
    ID_PENGHASILAN: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertPenghasilanSchema,
  viewPenghasilanSchema,
  updatePenghasilanSchema,
  deletePenghasilanSchema,
};
