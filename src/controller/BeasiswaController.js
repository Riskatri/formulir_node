const {
  insertBeasiswaSiswa,
  updateBeasiswaSiswa,
  deleteBeasiswaSiswa,
  viewBeasiswaSiswa,
  viewBeasiswaAllSiswa,
} = require("../../src/model/Beasiswa");

class BeasiswaController {
  async doInsertBeasiswaSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertBeasiswaSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertBeasiswaSiswa", err);
    }
  }

  async doSearchBeasiswaSiswa(req, res) {
    // const param = req.query;
    try {
      const result = await viewBeasiswaSiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchBeasiswaSiswa", err);
    }
  }

  async doSearchBeasiswaAllSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewBeasiswaAllSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchBeasiswaSiswa", err);
    }
  }

  async doUpdateBeasiswaSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateBeasiswaSiswa(param, param.ID_SISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateBeasiswaSiswa", err);
    }
  }

  async doDeleteBeasiswaSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteBeasiswaSiswa(param.ID_SISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteBeasiswaSiswa", err);
    }
  }
}
module.exports = new BeasiswaController();
