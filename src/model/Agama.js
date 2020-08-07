var db = require("../helper/DBUtil");

const insertAgama = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO agama " + " (ID_AGAMA, JENIS_AGAMA) " + " VALUES " + " ? ";

    var values = [[param.ID_AGAMA, param.JENIS_AGAMA]];

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

const viewAgama = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM agama where ID_AGAMA= ?";
    var sql_var = [param.ID_AGAMA];
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

const viewAllAgama = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM agama";

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

const updateAgama = async (param, ID_AGAMA) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE agama set JENIS_AGAMA=? where ID_AGAMA= ? ";
    var sql_var = [param.JENIS_AGAMA, ID_AGAMA];
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

const deleteAgama = async (ID_AGAMA) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM agama where ID_AGAMA = ? ";
    var sql_var = [ID_AGAMA];
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
  insertAgama,
  updateAgama,
  viewAgama,
  deleteAgama,
  viewAllAgama,
};
