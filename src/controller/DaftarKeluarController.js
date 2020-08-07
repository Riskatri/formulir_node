const {
  insertDaftarKeluarSiswa,
  viewDaftarKeluarSiswa,
  deleteDaftarKeluarSiswa,
  updateDaftarKeluarSiswa,
  viewAllDaftarKeluarSiswa,
} = require("../../src/model/DaftarKeluar");

class DaftarKeluarController {
  async doInsertDaftarKeluarSiswa(req, res) {
    const param = req.body;
    try {
      const result = await insertDaftarKeluarSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertDaftarKeluar", err);
    }
  }

  async doSearchDaftarKeluarSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewDaftarKeluarSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDaftarKeluarSiswa", err);
    }
  }

  async doSearchAllDaftarKeluarSiswa(req, res) {
    // const param = req.query;
    try {
      const result = await viewAllDaftarKeluarSiswa();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDaftarKeluarSiswa", err);
    }
  }

  async doUpdateDaftarKeluarSiswa(req, res) {
    const param = req.body;
    try {
      const result = await updateDaftarKeluarSiswa(
        param,
        param.DAFTAR_KELUAR_ID
      );
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateDaftarKeluarSiswa", err);
    }
  }

  async doDeleteDaftarKeluarSiswa(req, res) {
    const param = req.query;
    try {
      const result = await deleteDaftarKeluarSiswa(param.DAFTAR_KELUAR_ID);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteDaftarKeluarSiswa", err);
    }
  }
}
module.exports = new DaftarKeluarController();
