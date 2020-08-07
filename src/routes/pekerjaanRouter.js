const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const PekerjaanController = require("../controller/PekerjaanController");
const {
  insertPekerjaanSchema,
  updatePekerjaanSchema,
  viewPekerjaanSchema,
  deletePekerjaanSchema,
  viewAllPekerjaanSchema,
} = require("../schema/pekerjaanSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertPekerjaanSchema }),
    PekerjaanController.doInsertPekerjaan
  )
  .get(
    celebrate({ query: viewPekerjaanSchema }),
    PekerjaanController.doSearchPekerjaan
  )
  .put(
    celebrate({ body: updatePekerjaanSchema }),
    PekerjaanController.doUpdatePekerjaan
  )
  .delete(
    celebrate({
      query: deletePekerjaanSchema,
    }),
    PekerjaanController.doDeletePekerjaan
  );
router.route("/semua_pekerjaan").get(PekerjaanController.doAllSearchPekerjaan);

module.exports = router;
