const {
  insertPendidikan,
  updatePendidikan,
  deletePendidikan,
  viewPendidikan,
  viewAllPendidikan,
} = require("../../src/model/Pendidikan");

class PendidikanController {
  async doInsertPendidikan(req, res) {
    const param = req.body;
    try {
      const result = await insertPendidikan(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPendidikan", err);
    }
  }

  async doSearchPendidikan(req, res) {
    const param = req.query;
    try {
      const result = await viewPendidikan(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPendidikan", err);
    }
  }

  async doSearchAllPendidikan(req, res) {
    try {
      const result = await viewAllPendidikan();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPendidikan", err);
    }
  }

  async doUpdatePendidikan(req, res) {
    const param = req.body;
    try {
      const result = await updatePendidikan(param, param.ID_PENDIDIKAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePendidikan", err);
    }
  }

  async doDeletePendidikan(req, res) {
    const param = req.query;
    try {
      const result = await deletePendidikan(param.ID_PENDIDIKAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePendidikan", err);
    }
  }
}
module.exports = new PendidikanController();
