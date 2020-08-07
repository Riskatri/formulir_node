const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const PipController = require("../controller/PipController");
const {
  insertPipSchema,
  updatePipSchema,
  deletePipSchema,
  viewPipSchema,
} = require("../schema/pipSchema");

router
  .route("/")

  .post(celebrate({ body: insertPipSchema }), PipController.doInsertPip)
  .get(celebrate({ query: viewPipSchema }), PipController.doSearchPip)
  .put(celebrate({ body: updatePipSchema }), PipController.doUpdatePip)
  .delete(
    celebrate({
      query: deletePipSchema,
    }),
    PipController.doDeletePip
  );

router.route("/semua_pip").get(PipController.doSearchAllPip);

module.exports = router;
