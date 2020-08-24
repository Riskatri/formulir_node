class uploadController {
  doInsertFile(req, res) {
    if (!req.files) {
      return res.status(500).send("No files were uploaded.");
    }
    const express = require("express");
    const app = express();
    const fileUpload = require("express-fileupload");
    app.use(express.static("public"));
    app.use(fileUpload());
    let sampleFile = req.files.file;
    let file_name = Date.now() + "_" + sampleFile.name;

    sampleFile.mv(`${__dirname}/public/${file_name}`, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send({
        status: "File uploaded!",
        name: file_name,
        path: `/${file_name}`,
      });
    });
  }
}
module.exports = new uploadController();
