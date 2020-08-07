var db = require("../helper/DBUtil");

const insertPekerjaan = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO pekerjaan " +
      " (ID_PEKERJAAN, JENIS_PEKERJAAN) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_PEKERJAAN, param.JENIS_PEKERJAAN]];

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

const viewPekerjaan = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pekerjaan where ID_PEKERJAAN= ?";
    var sql_var = [param.ID_PEKERJAAN];
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

const viewAllPekerjaan = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pekerjaan";

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

const updatePekerjaan = async (param, ID_PEKERJAAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE pekerjaan set JENIS_PEKERJAAN=? where ID_PEKERJAAN= ? ";
    var sql_var = [param.JENIS_PEKERJAAN, ID_PEKERJAAN];
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

const deletePekerjaan = async (ID_PEKERJAAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM pekerjaan where ID_PEKERJAAN= ? ";
    var sql_var = [ID_PEKERJAAN];
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
  insertPekerjaan,
  updatePekerjaan,
  viewPekerjaan,
  deletePekerjaan,
  viewAllPekerjaan,
};
