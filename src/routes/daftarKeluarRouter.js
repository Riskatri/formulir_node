const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const DaftarKeluarController = require("../controller/DaftarKeluarController");
const {
  insertDaftarKeluarSchema,
  updateDaftarKeluarSchema,
  deleteDaftarKeluarSchema,
  viewDaftarKeluarSchema,
} = require("../schema/daftarKeluarSchema");
const AlasanKeluarController = require("../controller/AlasanKeluarController");

router
  .route("/")

  .post(
    celebrate({ body: insertDaftarKeluarSchema }),
    DaftarKeluarController.doInsertDaftarKeluarSiswa
  )
  .get(
    celebrate({ query: viewDaftarKeluarSchema }),
    DaftarKeluarController.doSearchDaftarKeluarSiswa
  )
  .put(
    celebrate({ body: updateDaftarKeluarSchema }),
    DaftarKeluarController.doUpdateDaftarKeluarSiswa
  )
  .delete(
    celebrate({
      query: deleteDaftarKeluarSchema,
    }),
    DaftarKeluarController.doDeleteDaftarKeluarSiswa
  );

router
  .route("/semua_daftar_siswa")
  .get(DaftarKeluarController.doSearchAllDaftarKeluarSiswa);
module.exports = router;
