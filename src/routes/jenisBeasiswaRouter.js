const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const JenisBeasiswaController = require("../controller/JenisBeasiswaController");
const {
  insertBeasiswaSchema,
  updateBeasiswaSchema,
  deleteBeasiswaSchema,
  viewBeasiswaSchema,
} = require("../schema/jenisBeasiswaSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertBeasiswaSchema }),
    JenisBeasiswaController.doInsertBeasiswa
  )
  .get(
    celebrate({ query: viewBeasiswaSchema }),
    JenisBeasiswaController.doSearchBeasiswa
  )
  .put(
    celebrate({ body: updateBeasiswaSchema }),
    JenisBeasiswaController.doUpdateBeasiswa
  )
  .delete(
    celebrate({
      query: deleteBeasiswaSchema,
    }),
    JenisBeasiswaController.doDeleteBeasiswa
  );
router
  .route("/semua_beasiswa")
  .get(JenisBeasiswaController.doSearchAllBeasiswa);

module.exports = router;
