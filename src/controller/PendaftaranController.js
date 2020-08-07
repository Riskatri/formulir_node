const {
  insertPendaftaranSiswa,
  updatePendaftaranSiswa,
  viewPendaftaranSiswa,
  deletePendaftaranSiswa,
  viewAllPendaftaranSiswa,
} = require("../../src/model/Pendaftaran");

class PendaftaranController {
  async doInsertPendaftaranSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertPendaftaranSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPendaftaranSiswa", err);
    }
  }

  async doSearchPendaftaranSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewPendaftaranSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPendaftaranSiswa", err);
    }
  }

  async doSearchAllPendaftaranSiswa(req, res) {
    try {
      const result = await viewAllPendaftaranSiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPendaftaranSiswa", err);
    }
  }

  async doUpdatePendaftaranSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updatePendaftaranSiswa(param, param.ID_PENDAFTARAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePendaftaranSiswa", err);
    }
  }

  async doDeletePendaftaranSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deletePendaftaranSiswa(param.ID_PENDAFTARAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePendaftaranSiswa", err);
    }
  }
}
module.exports = new PendaftaranController();
