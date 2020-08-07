var db = require("../helper/DBUtil");

const insertPendidikan = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO pendidikan " +
      " (ID_PENDIDIKAN, JENJANG_PENDIDIKAN) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_PENDIDIKAN, param.JENJANG_PENDIDIKAN]];

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

const viewPendidikan = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pendidikan where ID_PENDIDIKAN= ?";
    var sql_var = [param.ID_PENDIDIKAN];
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

const viewAllPendidikan = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pendidikan";

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

const updatePendidikan = async (param, ID_PENDIDIKAN) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE pendidikan set JENJANG_PENDIDIKAN=? where ID_PENDIDIKAN= ? ";
    var sql_var = [param.JENJANG_PENDIDIKAN, ID_PENDIDIKAN];
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

const deletePendidikan = async (ID_PENDIDIKAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM pendidikan where ID_PENDIDIKAN= ? ";
    var sql_var = [ID_PENDIDIKAN];
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
  insertPendidikan,
  updatePendidikan,
  viewPendidikan,
  deletePendidikan,
  viewAllPendidikan,
};
