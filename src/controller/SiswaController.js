const {
  insertSiswa,
  updateSiswa,
  viewSiswa,
  deleteSiswa,
  viewAllSiswa,
} = require("../../src/model/Siswa");

class SiswaController {
  async doInsertSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertSiswa", err);
    }
  }

  async doSearchSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchSiswa", err);
    }
  }

  async doSearchAllSiswa(req, res) {
    try {
      const result = await viewAllSiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchSiswa", err);
    }
  }

  async doUpdateSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateSiswa(param, param.ID_SISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateSiswa", err);
    }
  }

  async doDeleteSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteSiswa(param.ID_SISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteSiswa", err);
    }
  }
}
module.exports = new SiswaController();
