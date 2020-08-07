const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const DataAyahController = require("../controller/DataAyahController");
const {
  insertDataAyahSchema,
  updateDataAyahSchema,
  deleteDataAyahSchema,
  viewDataAyahSchema,
} = require("../schema/dataAyahSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertDataAyahSchema }),
    DataAyahController.doInsertDataAyah
  )

  .get(
    celebrate({ query: viewDataAyahSchema }),
    DataAyahController.doSearchDataAyah
  )
  .put(
    celebrate({ body: updateDataAyahSchema }),
    DataAyahController.doUpdateDataAyah
  )
  .delete(
    celebrate({
      query: deleteDataAyahSchema,
    }),
    DataAyahController.doDeleteDataAyah
  );
router.route("/semua_data_ayah").get(
  // celebrate({ query: viewDataAyahSchema }),
  DataAyahController.doSearchAllDataAyah
);

module.exports = router;
