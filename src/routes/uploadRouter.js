const express = require("express");
const router = express.Router();

const uploadRouter = require("../controller/uploadController");
router
  .route("/")

  .post(uploadRouter.doInsertFile);

module.exports = router;
