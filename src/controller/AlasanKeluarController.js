const {
  insertAlasanKeluar,
  updateAlasanKeluar,
  deleteAlasanKeluar,
  viewAlasanKeluar,
  viewAllAlasanKeluar,
} = require("../../src/model/AlasanKeluar");

class AlasanKeluarController {
  async doInsertAlasanKeluar(req, res) {
    const param = req.body;
    try {
      const result = await insertAlasanKeluar(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertAlasanKelua", err);
    }
  }

  async doSearchAlasanKeluar(req, res) {
    const param = req.query;
    try {
      const result = await viewAlasanKeluar(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAlasanKeluar", err);
    }
  }

  async doSearchAllAlasanKeluar(req, res) {
    try {
      const result = await viewAllAlasanKeluar();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAlasanKeluar", err);
    }
  }

  async doUpdateAlasanKeluar(req, res) {
    const param = req.body;
    try {
      const result = await updateAlasanKeluar(param, param.ID_ALASAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateAlasanKeluar", err);
    }
  }

  async doDeleteAlasanKeluar(req, res) {
    const param = req.query;
    try {
      const result = await deleteAlasanKeluar(param.ID_ALASAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteAlasanKeluar", err);
    }
  }
}
module.exports = new AlasanKeluarController();
