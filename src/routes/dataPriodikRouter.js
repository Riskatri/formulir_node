const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const DataPriodikController = require("../controller/DataPriodikController");
const {
  insertDataPriodikSchema,
  updateDataPriodikSchema,
  deleteDataPriodikSchema,
  viewDataPriodikSchema,
} = require("../schema/dataPriodikSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertDataPriodikSchema }),
    DataPriodikController.doInsertDataPriodik
  )
  .get(
    celebrate({ query: viewDataPriodikSchema }),
    DataPriodikController.doSearchDataPriodik
  )

  .put(
    celebrate({ body: updateDataPriodikSchema }),
    DataPriodikController.doUpdateDataPriodik
  )
  .delete(
    celebrate({
      query: deleteDataPriodikSchema,
    }),
    DataPriodikController.doDeleteDataPriodik
  );
router.route("/semua_data_priodik").get(
  // celebrate({ query: viewDataPriodikSchema }),
  DataPriodikController.doSearchAllDataPriodik
);

module.exports = router;
