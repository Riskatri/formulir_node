var db = require("../helper/DBUtil");

const insertKh = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO kebutuhan_khusus " +
      " (ID_KH, JENIS_KH) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_KH, param.JENIS_KH]];

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

const viewKh = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM kebutuhan_khusus where ID_KH= ?";
    var sql_var = [param.ID_KH];
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

const viewAllKh = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM kebutuhan_khusus";

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

const updateKh = async (param, ID_KH) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE kebutuhan_khusus set JENIS_KH=? where ID_KH= ? ";
    var sql_var = [param.JENIS_KH, ID_KH];
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

const deleteKh = async (ID_KH) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM kebutuhan_khusus where ID_KH= ? ";
    var sql_var = [ID_KH];
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
  insertKh,
  updateKh,
  viewKh,
  deleteKh,
  viewAllKh,
};
