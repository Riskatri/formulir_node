const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const SiswaController = require("../controller/SiswaController");
const {
  insertSiswaSchema,
  updateSiswaSchema,
  deleteSiswaSchema,
  viewSiswaSchema,
} = require("../schema/siswaSchema");

router
  .route("/")

  .post(celebrate({ body: insertSiswaSchema }), SiswaController.doInsertSiswa)
  .get(celebrate({ query: viewSiswaSchema }), SiswaController.doSearchSiswa)
  .put(celebrate({ body: updateSiswaSchema }), SiswaController.doUpdateSiswa)

  .delete(
    celebrate({
      query: deleteSiswaSchema,
    }),
    SiswaController.doDeleteSiswa
  );
router.route("/semua_siswa").get(SiswaController.doSearchAllSiswa);

module.exports = router;
