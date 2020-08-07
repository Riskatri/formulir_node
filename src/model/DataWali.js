var db = require("../helper/DBUtil");

const insertDataWali = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO data_wali" +
      " (ID_WALI, ID_SISWA, ID_PEKERJAAN, ID_PENDIDIKAN, ID_PENGHASILAN, NAMA_WALI, NIK_WALI, TAHUN_LAHIR) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_WALI,
        param.ID_SISWA,
        param.ID_PEKERJAAN,
        param.ID_PENDIDIKAN,
        param.ID_PENGHASILAN,
        param.NAMA_WALI,
        param.NIK_WALI,
        param.TAHUN_LAHIR,
      ],
    ];

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

const viewDataWali = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_wali where ID_WALI= ?";
    var sql_var = [param.ID_WALI];
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

const viewAllDataWali = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_wali";
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

const updateDataWali = async (param, ID_WALI) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE data_wali set ID_SISWA=?, ID_PEKERJAAN=?, ID_PENDIDIKAN=?, ID_PENGHASILAN=?, NAMA_WALI=?, NIK_WALI=?, TAHUN_LAHIR=? where ID_WALI= ? ";
    var sql_var = [
      param.ID_SISWA,

      param.ID_PEKERJAAN,
      param.ID_PENDIDIKAN,
      param.ID_PENGHASILAN,
      param.NAMA_WALI,
      param.NIK_WALI,
      param.TAHUN_LAHIR,
      ID_WALI,
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

const deleteDataWali = async (ID_WALI) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM data_wali where ID_WALI= ? ";
    var sql_var = [ID_WALI];
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
  insertDataWali,
  updateDataWali,
  viewDataWali,
  deleteDataWali,
  viewAllDataWali,
};
