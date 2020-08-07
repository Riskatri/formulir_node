const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const TempatController = require("../controller/TempatController");
const {
  insertTempatSchema,
  updateTempatSchema,
  deleteTempatSchema,
  viewTempatSchema,
} = require("../schema/tempatSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertTempatSchema }),
    TempatController.doInsertTempat
  )
  .get(celebrate({ query: viewTempatSchema }), TempatController.doSearchTempat)
  .put(celebrate({ body: updateTempatSchema }), TempatController.doUpdateTempat)
  .delete(
    celebrate({
      query: deleteTempatSchema,
    }),
    TempatController.doDeleteTempat
  );
router.route("/semua_tempat").get(TempatController.doSearchAllTempat);

module.exports = router;
