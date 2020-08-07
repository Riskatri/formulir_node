const express = require("express");
const router = express.Router();

const { celebrate } = require("celebrate");

const TransportController = require("../controller/TransportController");
const {
  insertTransportSchema,
  updateTransportSchema,
  deleteTransportSchema,
  viewTransportSchema,
} = require("../schema/transportSchema");

router
  .route("/")

  .post(
    celebrate({ body: insertTransportSchema }),
    TransportController.doInsertTransport
  )
  .get(
    celebrate({ query: viewTransportSchema }),
    TransportController.doSearchTransport
  )
  .put(
    celebrate({ body: updateTransportSchema }),
    TransportController.doUpdateTransport
  )
  .delete(
    celebrate({
      query: deleteTransportSchema,
    }),
    TransportController.doDeleteTransport
  );
router.route("/semua_transport").get(TransportController.doSearchAllTransport);

module.exports = router;
