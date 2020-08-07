const express = require("express");
const router = express.Router();

// const { celebrate } = require("celebrate");

const DataUmurController = require("../controller/DataUmurController");

router.route("/less_than_6years").get(DataUmurController.doSearchDataUmur);
router.route("/between_6years").get(DataUmurController.doSearchDataUmur2);
router.route("/more_than_7years").get(DataUmurController.doSearchDataUmur3);
router.route("/total").get(DataUmurController.doSearchTotal);

module.exports = router;
