const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const KhController = require("../controller/khController");
const {
  insertKhSchema,
  updateKhSchema,
  deleteKhSchema,
  viewKhSchema,
} = require("../schema/khSchema");

router
  .route("/")

  .post(celebrate({ body: insertKhSchema }), KhController.doInsertPip)
  .get(celebrate({ query: viewKhSchema }), KhController.doSearchkh)
  .put(celebrate({ body: updateKhSchema }), KhController.doUpdateKh)
  .delete(
    celebrate({
      query: deleteKhSchema,
    }),
    KhController.doDeleteKh
  );
router.route("/semua_kh").get(KhController.doSearchAllkh);

module.exports = router;
