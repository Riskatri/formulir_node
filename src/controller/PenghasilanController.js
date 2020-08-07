const {
  insertPenghasilan,
  updatePenghasilan,
  viewPenghasilan,
  deletePenghasilan,
  viewAllPenghasilan,
} = require("../../src/model/Penghasilan");

class PenghasilanController {
  async doInsertPenghasilan(req, res) {
    const param = req.body;
    try {
      const result = await insertPenghasilan(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertPenghasilan", err);
    }
  }

  async doSearchPenghasilan(req, res) {
    const param = req.query;
    try {
      const result = await viewPenghasilan(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPenghasilan", err);
    }
  }

  async doSearchAllPenghasilan(req, res) {
    try {
      const result = await viewAllPenghasilan();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchPenghasilan", err);
    }
  }

  async doUpdatePenghasilan(req, res) {
    const param = req.body;
    try {
      const result = await updatePenghasilan(param, param.ID_PENGHASILAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdatePenghasilan", err);
    }
  }

  async doDeletePenghasilan(req, res) {
    const param = req.query;
    try {
      const result = await deletePenghasilan(param.ID_PENGHASILAN);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeletePenghasilan", err);
    }
  }
}
module.exports = new PenghasilanController();
