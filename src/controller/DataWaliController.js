const {
  insertDataWali,
  updateDataWali,
  deleteDataWali,
  viewDataWali,
  viewAllDataWali,
} = require("../../src/model/DataWali");

class DataWaliController {
  async doInsertDataWali(req, res) {
    const param = req.body;
    try {
      const result = await insertDataWali(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertDataWali", err);
    }
  }

  async doSearchDataWali(req, res) {
    const param = req.query;
    try {
      const result = await viewDataWali(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataWali", err);
    }
  }

  async doSearchAllDataWali(req, res) {
    try {
      const result = await viewAllDataWali();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataWali", err);
    }
  }

  async doUpdateDataWali(req, res) {
    const param = req.body;
    try {
      const result = await updateDataWali(param, param.ID_WALI);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateDataWali", err);
    }
  }

  async doDeleteDataWali(req, res) {
    const param = req.query;
    try {
      const result = await deleteDataWali(param.ID_WALI);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteDataIbu", err);
    }
  }
}
module.exports = new DataWaliController();
