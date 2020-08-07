var db = require("../helper/DBUtil");

const insertPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO prestasi " + " (PRESTASI_ID, JENIS) " + " VALUES " + " ? ";

    var values = [[param.PRESTASI_ID, param.JENIS]];

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

const viewPrestasi = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM prestasi where PRESTASI_ID= ?";
    var sql_var = [param.PRESTASI_ID];
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

const viewAllPrestasi = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM prestasi";

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

const updatePrestasi = async (param, PRESTASI_ID) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE prestasi set JENIS =? where PRESTASI_ID= ? ";
    var sql_var = [param.JENIS, PRESTASI_ID];
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

const deletePrestasi = async (PRESTASI_ID) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM prestasi where PRESTASI_ID= ? ";
    var sql_var = [PRESTASI_ID];
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
  insertPrestasi,
  updatePrestasi,
  viewPrestasi,
  deletePrestasi,
  viewAllPrestasi,
};
