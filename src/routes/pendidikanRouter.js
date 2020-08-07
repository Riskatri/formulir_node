const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const PendidikanController = require("../controller/PendidikanController");
const {
  insertPendidikanSchema,
  updatePendidikanSchema,
  deletePendidikanSchema,
  viewPendidikanSchema,
} = require("../schema/pendidikanSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertPendidikanSchema }),
    PendidikanController.doInsertPendidikan
  )
  .get(
    celebrate({ query: viewPendidikanSchema }),
    PendidikanController.doSearchPendidikan
  )
  .put(
    celebrate({ body: updatePendidikanSchema }),
    PendidikanController.doUpdatePendidikan
  )
  .delete(
    celebrate({
      query: deletePendidikanSchema,
    }),
    PendidikanController.doDeletePendidikan
  );
router
  .route("/semua_pendidikan")
  .get(PendidikanController.doSearchAllPendidikan);

module.exports = router;
