const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const PendaftaranController = require("../controller/PendaftaranController");
const {
  insertPendaftaranSchema,
  updatePendaftaranSchema,
  viewPendaftaranSchema,
  deletePendaftaranSchema,
} = require("../schema/pendaftaranSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertPendaftaranSchema }),
    PendaftaranController.doInsertPendaftaranSiswa
  )
  .get(
    celebrate({ query: viewPendaftaranSchema }),
    PendaftaranController.doSearchPendaftaranSiswa
  )
  .put(
    celebrate({ body: updatePendaftaranSchema }),
    PendaftaranController.doUpdatePendaftaranSiswa
  )
  .delete(
    celebrate({
      query: deletePendaftaranSchema,
    }),
    PendaftaranController.doDeletePendaftaranSiswa
  );
router
  .route("/semua_pendaftaran")
  .get(PendaftaranController.doSearchAllPendaftaranSiswa);

module.exports = router;
