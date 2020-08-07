const express = require("express");
const router = express.Router();

// const { celebrate } = require("celebrate");

const DataSiswaController = require("../controller/DataSiswaController");

router.route("/").get(DataSiswaController.doSearchDataSiswa);

module.exports = router;
