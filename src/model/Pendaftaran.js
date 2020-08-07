var db = require("../helper/DBUtil");

const insertPendaftaranSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO pendaftaran " +
      " (ID_PENDAFTARAN, JENIS) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_PENDAFTARAN, param.JENIS]];

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

const viewPendaftaranSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pendaftaran where ID_PENDAFTARAN= ?";
    var sql_var = [param.ID_PENDAFTARAN];
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

const viewAllPendaftaranSiswa = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pendaftaran";

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

const updatePendaftaranSiswa = async (param, ID_PENDAFTARAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE pendaftaran set JENIS=? where ID_PENDAFTARAN= ? ";
    var sql_var = [
      //   param.ID_SISWA,
      param.JENIS,

      ID_PENDAFTARAN,
    ];
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

const deletePendaftaranSiswa = async (ID_PENDAFTARAN) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM pendaftaran where ID_PENDAFTARAN= ? ";
    var sql_var = [ID_PENDAFTARAN];
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
  insertPendaftaranSiswa,
  updatePendaftaranSiswa,
  viewPendaftaranSiswa,
  deletePendaftaranSiswa,
  viewAllPendaftaranSiswa,
};
