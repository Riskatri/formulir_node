const {
  insertPekerjaan,
  viewPekerjaan,
  deletePekerjaan,
  updatePekerjaan,
  viewAllPekerjaan,
} = require("../../src/model/Pekerjaan");

class PekerjaanController {
  async doInsertPekerjaan(req, res) {
    const param = req.body;
    try {
      const result = await insertPekerjaan(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPekerjaan", err);
    }
  }

  async doSearchPekerjaan(req, res) {
    const param = req.query;
    try {
      const result = await viewPekerjaan(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPekerjaan", err);
    }
  }

  async doAllSearchPekerjaan(req, res) {
    try {
      const result = await viewAllPekerjaan();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPekerjaan", err);
    }
  }

  async doUpdatePekerjaan(req, res) {
    const param = req.body;
    try {
      const result = await updatePekerjaan(param, param.ID_PEKERJAAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePekerjaan", err);
    }
  }

  async doDeletePekerjaan(req, res) {
    const param = req.query;
    try {
      const result = await deletePekerjaan(param.ID_PEKERJAAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePekerjaan", err);
    }
  }
}
module.exports = new PekerjaanController();
