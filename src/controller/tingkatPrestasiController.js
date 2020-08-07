const {
  insertTingkat,
  updateTingkat,
  deleteTingkat,
  viewTingkat,
  viewAllTingkat,
} = require("../../src/model/Tingkat_Prestasi");

class tingkatPrestasiController {
  async doInserttingkatPrestasi(req, res) {
    const param = req.body;
    try {
      const result = await insertTingkat(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertingkatPrestasi", err);
    }
  }

  async doSearchtingkatPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await viewTingkat(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchingkatPrestasi", err);
    }
  }

  async doSearchAllTingkatPrestasi(req, res) {
    try {
      const result = await viewAllTingkat();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchingkatPrestasi", err);
    }
  }

  async doUpdatetingkatPrestasi(req, res) {
    const param = req.body;
    try {
      const result = await updateTingkat(param, param.ID_TINGKAT);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateingkatPrestasi", err);
    }
  }

  async doDeletetingkatPrestasi(req, res) {
    const param = req.query;
    try {
      const result = await deleteTingkat(param.ID_TINGKAT);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteingkatPrestasi", err);
    }
  }
}
module.exports = new tingkatPrestasiController();
