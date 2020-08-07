const { Joi } = require("celebrate");

const insertPrestasiSchema = Joi.object()
  .keys({
    PRESTASI_ID: Joi.string().max(10).required(),
    JENIS: Joi.string().max(21).required(),
  })
  .unknown(true);

const viewPrestasiSchema = Joi.object()
  .keys({
    PRESTASI_ID: Joi.string().max(10).required(),
  })
  .unknown(true);

const updatePrestasiSchema = Joi.object()
  .keys({
    PRESTASI_ID: Joi.string().max(10).required(),
    JENIS: Joi.string().max(21).required(),
  })
  .unknown(true);

const deletePrestasiSchema = Joi.object()
  .keys({
    PRESTASI_ID: Joi.string().max(10).required(),
  })
  .unknown(true);

module.exports = {
  insertPrestasiSchema,
  viewPrestasiSchema,
  updatePrestasiSchema,
  deletePrestasiSchema,
};
