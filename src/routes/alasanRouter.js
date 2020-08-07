const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const AlasanKeluarController = require("../controller/AlasanKeluarController");
const {
  insertAlasanKeluarSchema,
  updateAlasanKeluarSchema,
  deleteAlasanKeluarSchema,
  viewAlasanKeluarSchema,
} = require("../schema/alasanSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertAlasanKeluarSchema }),
    AlasanKeluarController.doInsertAlasanKeluar
  )
  .get(
    celebrate({ query: viewAlasanKeluarSchema }),
    AlasanKeluarController.doSearchAlasanKeluar
  )
  .put(
    celebrate({ body: updateAlasanKeluarSchema }),
    AlasanKeluarController.doUpdateAlasanKeluar
  )
  .delete(
    celebrate({
      query: deleteAlasanKeluarSchema,
    }),
    AlasanKeluarController.doDeleteAlasanKeluar
  );
router
  .route("/semua_alasan")
  .get(AlasanKeluarController.doSearchAllAlasanKeluar);

module.exports = router;
