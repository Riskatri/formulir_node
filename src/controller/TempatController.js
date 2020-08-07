const {
  insertTempat,
  updateTempat,
  viewTempat,
  deleteTempat,
  viewAllTempat,
} = require("../../src/model/tempatTinggal");

class TempatController {
  async doInsertTempat(req, res) {
    const param = req.body;
    try {
      const result = await insertTempat(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertTempat", err);
    }
  }

  async doSearchTempat(req, res) {
    const param = req.query;
    try {
      const result = await viewTempat(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchTempat", err);
    }
  }

  async doSearchTempat(req, res) {
    const param = req.query;
    try {
      const result = await viewTempat(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchTempat", err);
    }
  }

  async doSearchAllTempat(req, res) {
    try {
      const result = await viewAllTempat();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchTempat", err);
    }
  }

  async doUpdateTempat(req, res) {
    const param = req.body;
    try {
      const result = await updateTempat(param, param.ID_TINGGAL);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateTempat", err);
    }
  }

  async doDeleteTempat(req, res) {
    const param = req.query;
    try {
      const result = await deleteTempat(param.ID_TINGGAL);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteTempat", err);
    }
  }
}
module.exports = new TempatController();
