const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const BeasiswaController = require("../controller/BeasiswaController");
const {
  insertBeasiswaSiswaSchema,
  updateBeasiswaSiswaSchema,
  deleteBeasiswaSiswaSchema,
  viewBeasiswaSiswaSchema,
} = require("../schema/beasiswaSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertBeasiswaSiswaSchema }),
    BeasiswaController.doInsertBeasiswaSiswa
  )
  .get(
    celebrate({ query: viewBeasiswaSiswaSchema }),
    BeasiswaController.doSearchBeasiswaSiswa
  )
  .put(
    celebrate({ body: updateBeasiswaSiswaSchema }),
    BeasiswaController.doUpdateBeasiswaSiswa
  )
  .delete(
    celebrate({
      query: deleteBeasiswaSiswaSchema,
    }),
    BeasiswaController.doDeleteBeasiswaSiswa
  );
router
  .route("/semua_beasiswa_siswa")
  .get(BeasiswaController.doSearchBeasiswaAllSiswa);

module.exports = router;
