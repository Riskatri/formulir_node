var db = require("../helper/DBUtil");

const insertTempat = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO tempat_tinggal " +
      " (ID_TINGGAL, TEMPAT_TINGGAL) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_TINGGAL, param.TEMPAT_TINGGAL]];

    db.query(sql, [values], function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const viewTempat = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM tempat_tinggal where ID_TINGGAL= ?";
    var sql_var = [param.ID_TINGGAL];
    db.query(sql, sql_var, function (err, rows, fields) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const viewAllTempat = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM tempat_tinggal";

    db.query(sql, function (err, rows, fields) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
const updateTempat = async (param, ID_TINGGAL) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE tempat_tinggal set TEMPAT_TINGGAL=? where ID_TINGGAL= ? ";
    var sql_var = [param.TEMPAT_TINGGAL, ID_TINGGAL];
    db.query(sql, sql_var, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const deleteTempat = async (ID_TINGGAL) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM tempat_tinggal where ID_TINGGAL= ? ";
    var sql_var = [ID_TINGGAL];
    db.query(sql, sql_var, function (err, result) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  insertTempat,
  updateTempat,
  viewTempat,
  deleteTempat,
  viewAllTempat,
};
