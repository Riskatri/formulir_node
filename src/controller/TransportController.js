const {
  insertTransport,
  updateTransport,
  deleteTransport,
  viewTransport,
  viewAllTransport,
} = require("../../src/model/Transportasi");

class TransportController {
  async doInsertTransport(req, res) {
    const param = req.body;
    try {
      const result = await insertTransport(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doInsertTransport", err);
    }
  }

  async doSearchTransport(req, res) {
    const param = req.query;
    try {
      const result = await viewTransport(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchTransport", err);
    }
  }

  async doSearchAllTransport(req, res) {
    try {
      const result = await viewAllTransport();
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchTransport", err);
    }
  }

  async doUpdateTransport(req, res) {
    const param = req.body;
    try {
      const result = await updateTransport(param, param.ID_TRANSPORT);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doUpdateTransport", err);
    }
  }

  async doDeleteTransport(req, res) {
    const param = req.query;
    try {
      const result = await deleteTransport(param.ID_TRANSPORT);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doDeleteTransport", err);
    }
  }
}
module.exports = new TransportController();
