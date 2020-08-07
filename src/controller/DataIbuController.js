const {
  insertDataIbu,
  updateDataIbu,
  deleteDataIbu,
  viewDataIbu,
  viewAllDataIbu,
} = require("../../src/model/DataIbu");

class DataIbuController {
  async doInsertDataIbu(req, res) {
    const param = req.body;
    try {
      const result = await insertDataIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertDataIbu", err);
    }
  }

  async doSearchDataIbu(req, res) {
    const param = req.query;
    try {
      const result = await viewDataIbu(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataIbu", err);
    }
  }

  async doSearchAllDataIbu(req, res) {
    try {
      const result = await viewAllDataIbu();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllDataIbu", err);
    }
  }

  async doUpdateDataIbu(req, res) {
    const param = req.body;
    try {
      const result = await updateDataIbu(param, param.ID_IBU);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateDataIbu", err);
    }
  }

  async doDeleteDataIbu(req, res) {
    const param = req.query;
    try {
      const result = await deleteDataIbu(param.ID_IBU);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteDataIbu", err);
    }
  }
}
module.exports = new DataIbuController();
