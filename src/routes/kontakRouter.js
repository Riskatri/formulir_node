const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const KontakController = require("../controller/KontakController");
const {
  insertKontakSchema,
  updateKontakSchema,
  deleteKontakSchema,
  viewKontakSchema,
} = require("../schema/kontakSchema");
router
  .route("/")

  .post(
    celebrate({ body: insertKontakSchema }),
    KontakController.doInsertKontak
  )

  .get(
    celebrate({ query: viewKontakSchema }),
    KontakController.doSearchKontakById
  )

  .put(celebrate({ body: updateKontakSchema }), KontakController.doUpdateKontak)
  .delete(
    celebrate({
      query: deleteKontakSchema,
    }),
    KontakController.doDeleteKontak
  );
router.route("/all_contact").get(
  // celebrate({ query: viewKontakSchema }),
  KontakController.doSearchKontak
);

module.exports = router;
