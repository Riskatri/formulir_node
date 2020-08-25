require("dotenv").config();
const express = require("express");
const http = require("http");
const routes = require("./src/routes");
const { errors } = require("celebrate");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.SERVER_PORT;
var cors = require("cors");

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static("public"));
app.use(fileUpload());
app.post("/upload", (req, res) => {
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

app.get("/download", (req, res) => {
  // var filePath = "./public/test.txt";
  // res.download(filePath);
  // console.log(filePath);
  var fs = require("fs");
  var writeStream = fs.createWriteStream("./public/example1.pdf");
  writeStream.write("Generate file");
  writeStream.end();
  var fs = require("fs");
  var files = fs.createReadStream("./public/example1.pdf");
  res.writeHead(200, {
    "Content-disposition": "attachment; filename=example1.pdf",
  });
  files.pipe(res);
});

// register base path '/'
app.get("/", (req, res) =>
  res.send(`${process.env.APP_NAME} - ${process.env.APP_VERSION}`)
);

//register all route under '/api/v1'
app.use("/api/v1", routes);

// register error handler from Joi->Celebrate
app.use(errors());

var httpServer = http.createServer(app);

httpServer.listen(port, () =>
  console.log(`Server started, listening on port ${port}!`)
);

module.exports = app;
