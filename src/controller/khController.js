const {
  insertKh,
  updateKh,
  deleteKh,
  viewKh,
  viewAllKh,
} = require("../../src/model/Kh");

class KhController {
  async doInsertPip(req, res) {
    const param = req.body;
    try {
      const result = await insertKh(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertKh", err);
    }
  }

  async doSearchkh(req, res) {
    const param = req.query;
    try {
      const result = await viewKh(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchKh", err);
    }
  }
  async doSearchAllkh(req, res) {
    try {
      const result = await viewAllKh();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchKh", err);
    }
  }

  async doUpdateKh(req, res) {
    const param = req.body;
    try {
      const result = await updateKh(param, param.ID_KH);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateKh", err);
    }
  }

  async doDeleteKh(req, res) {
    const param = req.query;
    try {
      const result = await deleteKh(param.ID_KH);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteKh", err);
    }
  }
}
module.exports = new KhController();
