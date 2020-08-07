const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const DataWaliController = require("../controller/DataWaliController");
const {
  insertDataWaliSchema,
  updateDataWaliSchema,
  deleteDataWaliSchema,
  viewDataWaliSchema,
} = require("../schema/dataWaliSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertDataWaliSchema }),
    DataWaliController.doInsertDataWali
  )

  .get(
    celebrate({ query: viewDataWaliSchema }),
    DataWaliController.doSearchDataWali
  )
  .put(
    celebrate({ body: updateDataWaliSchema }),
    DataWaliController.doUpdateDataWali
  )
  .delete(
    celebrate({
      query: deleteDataWaliSchema,
    }),
    DataWaliController.doDeleteDataWali
  );
router.route("/semua_data_wali").get(
  // celebrate({ query: viewDataWaliSchema }),
  DataWaliController.doSearchAllDataWali
);

module.exports = router;
