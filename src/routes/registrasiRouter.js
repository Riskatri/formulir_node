const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const RegistrasiController = require("../controller/RegistrasiController");
const {
  insertRegistrasiSchema,
  updateRegistrasiSchema,
  deleteRegistrasiSchema,
  viewRegistrasiSchema,
} = require("../schema/registrasiSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertRegistrasiSchema }),
    RegistrasiController.doInsertRegistrasiSiswa
  )
  .get(
    celebrate({ query: viewRegistrasiSchema }),
    RegistrasiController.doSearchRegistrasiSiswa
  )
  .put(
    celebrate({ body: updateRegistrasiSchema }),
    RegistrasiController.doUpdateRegistrasiSiswa
  )
  .delete(
    celebrate({
      query: deleteRegistrasiSchema,
    }),
    RegistrasiController.doDeleteRegistrasiSiswa
  );
router
  .route("/semua_registrasi")
  .get(RegistrasiController.doSearchAllRegistrasiSiswa);

module.exports = router;
