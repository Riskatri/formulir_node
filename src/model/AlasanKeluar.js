var db = require("../helper/DBUtil");

const insertAlasanKeluar = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO alasan_keluar " +
      " (ID_ALASAN, KELUAR_KARNA) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_ALASAN, param.KELUAR_KARNA]];

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

const viewAlasanKeluar = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM alasan_keluar where ID_ALASAN= ?";
    var sql_var = [param.ID_ALASAN];
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

const viewAllAlasanKeluar = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM alasan_keluar";

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

const updateAlasanKeluar = async (param, ID_ALASAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE alasan_keluar set  KELUAR_KARNA=? where ID_ALASAN= ? ";
    var sql_var = [param.KELUAR_KARNA, ID_ALASAN];
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

const deleteAlasanKeluar = async (ID_ALASAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM alasan_keluar where ID_ALASAN= ? ";
    var sql_var = [ID_ALASAN];
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
  insertAlasanKeluar,
  updateAlasanKeluar,
  viewAlasanKeluar,
  deleteAlasanKeluar,
  viewAllAlasanKeluar,
};
