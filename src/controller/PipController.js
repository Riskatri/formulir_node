const {
  insertPIP,
  updatePIP,
  deletePIP,
  viewPIP,
  viewAllPIP,
} = require("../../src/model/Pip");

class PipController {
  async doInsertPip(req, res) {
    const param = req.body;
    try {
      const result = await insertPIP(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPip", err);
    }
  }

  async doSearchPip(req, res) {
    const param = req.query;
    try {
      const result = await viewPIP(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPip", err);
    }
  }

  async doSearchAllPip(req, res) {
    try {
      const result = await viewAllPIP();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPip", err);
    }
  }

  async doUpdatePip(req, res) {
    const param = req.body;
    try {
      const result = await updatePIP(param, param.ID_PIP);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePip", err);
    }
  }

  async doDeletePip(req, res) {
    const param = req.query;
    try {
      const result = await deletePIP(param.ID_PIP);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePip", err);
    }
  }
}
module.exports = new PipController();
