const { viewDataSiswa } = require("../../src/model/DataSiswa");

class DataSiswaController {
  async doSearchDataSiswa(req, res) {
    const param = req.query;
    try {
      const result = await viewDataSiswa(param);
      res.status(200).send({
        result,
      });
    } catch (err) {
      console.log("doSearchDataSiswa", err);
    }
  }
}
module.exports = new DataSiswaController();
