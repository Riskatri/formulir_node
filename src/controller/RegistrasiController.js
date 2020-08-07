const {
  insertRegistrasiSiswa,
  updateRegistrasiSiswa,
  viewRegistrasiSiswa,
  deleteRegistrasiSiswa,
  viewAllRegistrasiSiswa,
} = require("../../src/model/Registrasi");

class RegistrasiController {
  async doInsertRegistrasiSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertRegistrasiSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertRegistrasiSiswa", err);
    }
  }

  async doSearchRegistrasiSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewRegistrasiSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchRegistrasiSiswa", err);
    }
  }

  async doSearchAllRegistrasiSiswa(req, res) {
    try {
      const result = await viewAllRegistrasiSiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchRegistrasiSiswa", err);
    }
  }

  async doUpdateRegistrasiSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateRegistrasiSiswa(param, param.REGISTRASI_ID);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateRegistrasiSiswa", err);
    }
  }

  async doDeleteRegistrasiSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteRegistrasiSiswa(param.REGISTRASI_ID);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteRegistrasiSiswa", err);
    }
  }
}
module.exports = new RegistrasiController();
