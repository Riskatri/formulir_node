const {
  insertAgama,
  viewAgama,
  updateAgama,
  deleteAgama,
  viewAllAgama,
} = require("../../src/model/Agama");

class AgamaController {
  async doInserAgama(req, res) {
    const param = req.body;
    try {
      const result = await insertAgama(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertAGAMA", err);
    }
  }

  async doSearchAgama(req, res) {
    const param = req.query;
    try {
      const result = await viewAgama(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAgama", err);
    }
  }

  async doSearchAllAgama(req, res) {
    try {
      const result = await viewAllAgama();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllAgama", err);
    }
  }

  async doUpdateAgama(req, res) {
    const param = req.body;
    try {
      const result = await updateAgama(param, param.ID_AGAMA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateUser", err);
    }
  }

  async doDeleteAgama(req, res) {
    const param = req.query;
    try {
      const result = await deleteAgama(param.ID_AGAMA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteAgama", err);
    }
  }
}
module.exports = new AgamaController();
