const {
  insertPrestasiSiswa,
  updatePrestasiSiswa,
  viewPrestasiSiswa,
  deletePrestasiSiswa,
  viewPrestasiAllSiswa,
} = require("../../src/model/PrestasiSiswa");

class PrestasiSiswaController {
  async doInsertPrestasiSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertPrestasiSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPrestasiSiswa", err);
    }
  }

  async doSearchPrestasiSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewPrestasiSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPrestasiSiswa", err);
    }
  }

  async doSearchPrestasiAllSiswa(req, res) {
    try {
      const result = await viewPrestasiAllSiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPrestasiAllSiswa", err);
    }
  }

  async doUpdatePrestasiSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updatePrestasiSiswa(param, param.ID_SISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePrestasiSiswa", err);
    }
  }

  async doDeletePrestasiSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deletePrestasiSiswa(param.ID_SISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePrestasiSiswa", err);
    }
  }
}
module.exports = new PrestasiSiswaController();
