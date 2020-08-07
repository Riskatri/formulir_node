const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const tingkatPrestasiController = require("../controller/tingkatPrestasiController");
const {
  inserttingkatPrestasiSchema,
  updatetingkatPrestasiSchema,
  deletetingkatPrestasiSchema,
  viewtingkatPrestasiSchema,
} = require("../schema/tingkatPrestasiSchema");

router
  .route("/")

  .post(
    celebrate({ body: inserttingkatPrestasiSchema }),
    tingkatPrestasiController.doInserttingkatPrestasi
  )
  .get(
    celebrate({ query: viewtingkatPrestasiSchema }),
    tingkatPrestasiController.doSearchtingkatPrestasi
  )
  .put(
    celebrate({ body: updatetingkatPrestasiSchema }),
    tingkatPrestasiController.doUpdatetingkatPrestasi
  )
  .delete(
    celebrate({
      query: deletetingkatPrestasiSchema,
    }),
    tingkatPrestasiController.doDeletetingkatPrestasi
  );
router
  .route("/semua_tingkat")
  .get(tingkatPrestasiController.doSearchAllTingkatPrestasi);

module.exports = router;
