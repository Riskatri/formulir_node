const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const AgamaController = require("../controller/AgamaController");
const {
  insertAgamaSchema,
  updateAgamaSchema,
  viewAgamaSchema,
  deleteAgamaSchema,
} = require("../schema/agamaSchema");

router
  .route("/")

  .post(celebrate({ body: insertAgamaSchema }), AgamaController.doInserAgama)
  .get(celebrate({ query: viewAgamaSchema }), AgamaController.doSearchAgama)
  .put(celebrate({ body: updateAgamaSchema }), AgamaController.doUpdateAgama)
  .delete(
    celebrate({
      query: deleteAgamaSchema,
    }),
    AgamaController.doDeleteAgama
  );

router.route("/semua_agama").get(AgamaController.doSearchAllAgama);

module.exports = router;
