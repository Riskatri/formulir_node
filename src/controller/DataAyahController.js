const {
  insertDataAyah,
  updateDataAyah,
  deleteDataAyah,
  viewDataAyah,
  viewAllDataAyah,
} = require("../../src/model/DataAyah");

class DataAyahController {
  async doInsertDataAyah(req, res) {
    const param = req.body;
    try {
      const result = await insertDataAyah(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertDataAyah", err);
    }
  }

  async doSearchDataAyah(req, res) {
    const param = req.query;
    try {
      const result = await viewDataAyah(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataAyah", err);
    }
  }

  async doSearchAllDataAyah(req, res) {
    try {
      const result = await viewAllDataAyah();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllDataAyah", err);
    }
  }

  async doUpdateDataAyah(req, res) {
    const param = req.body;
    try {
      const result = await updateDataAyah(param, param.ID_AYAH);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateDataAyah", err);
    }
  }

  async doDeleteDataAyah(req, res) {
    const param = req.query;
    try {
      const result = await deleteDataAyah(param.ID_AYAH);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteDataAyah", err);
    }
  }
}
module.exports = new DataAyahController();
