var db = require("../helper/DBUtil");

const insertPenghasilan = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO penghasilan " +
      " (ID_PENGHASILAN, PENGHASILAN) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_PENGHASILAN, param.PENGHASILAN]];

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

const viewPenghasilan = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM penghasilan where ID_PENGHASILAN= ?";
    var sql_var = [param.ID_PENGHASILAN];
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

const viewAllPenghasilan = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM penghasilan";

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

const updatePenghasilan = async (param, ID_PENGHASILAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE penghasilan set PENGHASILAN=? where ID_PENGHASILAN= ? ";
    var sql_var = [param.PENGHASILAN, ID_PENGHASILAN];
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

const deletePenghasilan = async (ID_PENGHASILAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM penghasilan where ID_PENGHASILAN= ? ";
    var sql_var = [ID_PENGHASILAN];
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
  insertPenghasilan,
  updatePenghasilan,
  viewPenghasilan,
  deletePenghasilan,
  viewAllPenghasilan,
};
