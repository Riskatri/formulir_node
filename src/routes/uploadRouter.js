const express = require("express");
const router = express.Router();
const app = express();
const fileUpload = require("express-fileupload");
app.use(express.static(__dirname));
app.use(fileUpload());

router.post("/", (req, res) => {
  if (!req.files) {
    return res.status(500).send("No files were uploaded.");
  }

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
});

module.exports = router;
