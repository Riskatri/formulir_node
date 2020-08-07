const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const {
  insertPrestasiSiswaSchema,
  updatePrestasiSiswaSchema,
  deletePrestasiSiswaSchema,
  viewPrestasiSiswaSchema,
} = require("../schema/prestasiSiswaSchema");

const PrestasiSiswaController = require("../controller/PrestasiSiswaController");

router
  .route("/")

  .post(
    celebrate({ body: insertPrestasiSiswaSchema }),
    PrestasiSiswaController.doInsertPrestasiSiswa
  )
  .get(
    celebrate({ query: viewPrestasiSiswaSchema }),
    PrestasiSiswaController.doSearchPrestasiSiswa
  )
  .put(
    celebrate({ body: updatePrestasiSiswaSchema }),
    PrestasiSiswaController.doUpdatePrestasiSiswa
  )
  .delete(
    celebrate({
      query: deletePrestasiSiswaSchema,
    }),
    PrestasiSiswaController.doDeletePrestasiSiswa
  );
router
  .route("/semua_prestasi_siswa")
  .get(PrestasiSiswaController.doSearchPrestasiAllSiswa);

module.exports = router;
