const { Joi } = require("celebrate");

const inserttingkatPrestasiSchema = Joi.object()
  .keys({
    ID_TINGKAT: Joi.number().integer().required(),
    TINGKAT_PRESTASI: Joi.string().max(21).required(),
  })
  .unknown(true);

const viewtingkatPrestasiSchema = Joi.object()
  .keys({
    ID_TINGKAT: Joi.number().integer().required(),
  })
  .unknown(true);

const updatetingkatPrestasiSchema = Joi.object()
  .keys({
    ID_TINGKAT: Joi.number().integer().required(),
    TINGKAT_PRESTASI: Joi.string().max(21).required(),
  })
  .unknown(true);

const deletetingkatPrestasiSchema = Joi.object()
  .keys({
    ID_TINGKAT: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  inserttingkatPrestasiSchema,
  viewtingkatPrestasiSchema,
  updatetingkatPrestasiSchema,
  deletetingkatPrestasiSchema,
};
