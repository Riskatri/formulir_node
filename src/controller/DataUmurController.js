const {
  viewDataUmur1,
  viewDataUmur2,
  viewDataUmur3,
  viewDataTotalUmur,
} = require("../model/DataUmur");

class DataUmurController {
  async doSearchDataUmur(req, res) {
    const param = req.query;
    try {
      const result = await viewDataUmur1(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataUmur1", err);
    }
  }
  async doSearchDataUmur2(req, res) {
    const param = req.query;
    try {
      const result = await viewDataUmur2(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataUmur2", err);
    }
  }
  async doSearchDataUmur3(req, res) {
    const param = req.query;
    try {
      const result = await viewDataUmur3(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataUmur3", err);
    }
  }
  async doSearchTotal(req, res) {
    const param = req.query;
    try {
      const result = await viewDataTotalUmur(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataUmur3", err);
    }
  }
}

module.exports = new DataUmurController();
