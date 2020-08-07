const {
  insertPrestasi,
  viewPrestasi,
  deletePrestasi,
  updatePrestasi,
  viewAllPrestasi,
} = require("../../src/model/Prestasi");

class PrestasiController {
  async doInsertPrestasi(req, res) {
    const param = req.body;
    try {
      const result = await insertPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPrestasi", err);
    }
  }

  async doSearchPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await viewPrestasi(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPrestasi", err);
    }
  }

  async doSearchAllPrestasi(req, res) {
    try {
      const result = await viewAllPrestasi();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPrestasi", err);
    }
  }

  async doUpdatePrestasi(req, res) {
    const param = req.body;
    try {
      const result = await updatePrestasi(param, param.PRESTASI_ID);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePrestasi", err);
    }
  }

  async doDeletePrestasi(req, res) {
    const param = req.query;
    try {
      const result = await deletePrestasi(param.PRESTASI_ID);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePrestasi", err);
    }
  }
}
module.exports = new PrestasiController();
