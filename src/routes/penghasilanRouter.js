const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const {
  insertPenghasilanSchema,
  updatePenghasilanSchema,
  deletePenghasilanSchema,
  viewPenghasilanSchema,
} = require("../schema/penghasilanSchema");

const PenghasilanController = require("../controller/PenghasilanController");

router
  .route("/")

  .post(
    celebrate({ body: insertPenghasilanSchema }),
    PenghasilanController.doInsertPenghasilan
  )
  .get(
    celebrate({ query: viewPenghasilanSchema }),
    PenghasilanController.doSearchPenghasilan
  )
  .put(
    celebrate({ body: updatePenghasilanSchema }),
    PenghasilanController.doUpdatePenghasilan
  )
  .delete(
    celebrate({
      query: deletePenghasilanSchema,
    }),
    PenghasilanController.doDeletePenghasilan
  );
router
  .route("/semua_penghasilan")
  .get(PenghasilanController.doSearchAllPenghasilan);

module.exports = router;
