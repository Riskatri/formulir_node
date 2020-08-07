const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const {
  insertPrestasiSchema,
  viewPrestasiSchema,
  updatePrestasiSchema,
  deletePrestasiSchema,
} = require("../schema/prestasiSchema");

const PrestasiController = require("../controller/PrestasiController");

router
  .route("/")

  .post(
    celebrate({ body: insertPrestasiSchema }),
    PrestasiController.doInsertPrestasi
  )
  .get(
    celebrate({ query: viewPrestasiSchema }),
    PrestasiController.doSearchPrestasi
  )
  .put(
    celebrate({ body: updatePrestasiSchema }),
    PrestasiController.doUpdatePrestasi
  )
  .delete(
    celebrate({
      query: deletePrestasiSchema,
    }),
    PrestasiController.doDeletePrestasi
  );
router.route("/semua_prestasi").get(PrestasiController.doSearchAllPrestasi);

module.exports = router;
