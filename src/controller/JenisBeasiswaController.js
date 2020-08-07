const {
  insertBeasiswa,
  viewBeasiswa,
  deleteBeasiswa,
  updateBeasiswa,
  viewAllBeasiswa,
} = require("../../src/model/JenisBeasiswa");

class JenisBeasiswaController {
  async doInsertBeasiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertBeasiswa", err);
    }
  }

  async doSearchBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewBeasiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchBeasiswa", err);
    }
  }
  async doSearchAllBeasiswa(req, res) {
    try {
      const result = await viewAllBeasiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchAllBeasiswa", err);
    }
  }

  async doUpdateBeasiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateBeasiswa(param, param.ID_JENIS_BEASISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateBeasiswa", err);
    }
  }

  async doDeleteBeasiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteBeasiswa(param.ID_JENIS_BEASISWA);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteBeasiswa", err);
    }
  }
}
module.exports = new JenisBeasiswaController();
