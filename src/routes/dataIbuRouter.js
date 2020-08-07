const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const DataIbuController = require("../controller/DataIbuController");
const {
  insertDataIbuSchema,
  updateDataIbuSchema,
  deleteDataIbuSchema,
  viewDataIbuSchema,
} = require("../schema/dataIbuSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertDataIbuSchema }),
    DataIbuController.doInsertDataIbu
  )

  .get(
    celebrate({ query: viewDataIbuSchema }),
    DataIbuController.doSearchDataIbu
  )
  .put(
    celebrate({ body: updateDataIbuSchema }),
    DataIbuController.doUpdateDataIbu
  )
  .delete(
    celebrate({
      query: deleteDataIbuSchema,
    }),
    DataIbuController.doDeleteDataIbu
  );
router.route("/semua_data_ibu").get(
  // celebrate({ query: viewDataIbuSchema }),
  DataIbuController.doSearchAllDataIbu
);

module.exports = router;
