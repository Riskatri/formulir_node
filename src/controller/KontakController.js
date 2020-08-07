const {
  insertKontak,
  updateKontak,
  deleteKontak,
  viewKontak,
  viewKontakById,
} = require("../../src/model/Kontak");

class KontakController {
  async doInsertKontak(req, res) {
    const param = req.body;
    try {
      const result = await insertKontak(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertKontak", err);
    }
  }

  async doSearchKontak(req, res) {
    try {
      const result = await viewKontak();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchKontak", err);
    }
  }

  async doSearchKontakById(req, res) {
    const param = req.query;
    try {
      const result = await viewKontakById(param, param.ID_KONTAK);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchKontakById", err);
    }
  }

  async doUpdateKontak(req, res) {
    const param = req.body;
    try {
      const result = await updateKontak(param, param.ID_KONTAK);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateKontak", err);
    }
  }

  async doDeleteKontak(req, res) {
    const param = req.query;
    try {
      const result = await deleteKontak(param.ID_KONTAK);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteKontak", err);
    }
  }
}
module.exports = new KontakController();
