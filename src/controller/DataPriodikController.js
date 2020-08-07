const {
  insertDataPriodik,
  updateDataPriodik,
  deleteDataPriodik,
  viewDataPriodik,
  viewDataAllPriodik,
} = require("../../src/model/DataPriodik");

class DataPriodikController {
  async doInsertDataPriodik(req, res) {
    const param = req.body;
    try {
      const result = await insertDataPriodik(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertDataPriodik", err);
    }
  }

  async doSearchDataPriodik(req, res) {
    const param = req.query;
    try {
      const result = await viewDataPriodik(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataPriodik", err);
    }
  }

  async doSearchAllDataPriodik(req, res) {
    // const param = req.query;
    try {
      const result = await viewDataAllPriodik();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataAllPriodik", err);
    }
  }

  async doUpdateDataPriodik(req, res) {
    const param = req.body;
    try {
      const result = await updateDataPriodik(param, param.ID_DATA_PRIODIK);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateDataPriodik", err);
    }
  }

  async doDeleteDataPriodik(req, res) {
    const param = req.query;
    try {
      const result = await deleteDataPriodik(param.ID_DATA_PRIODIK);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteDataPriodik", err);
    }
  }
}
module.exports = new DataPriodikController();
