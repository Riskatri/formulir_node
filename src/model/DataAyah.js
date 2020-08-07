var db = require("../helper/DBUtil");

const insertDataAyah = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO data_ayah " +
      " (ID_AYAH, ID_SISWA, ID_KH, ID_PEKERJAAN, ID_PENDIDIKAN, ID_PENGHASILAN, NAMA, NIK_AYAH, TAHUN_LAHIR) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_AYAH,
        param.ID_SISWA,
        param.ID_KH,
        param.ID_PEKERJAAN,
        param.ID_PENDIDIKAN,
        param.ID_PENGHASILAN,
        param.NAMA,
        param.NIK_AYAH,
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

const viewDataAyah = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_ayah where ID_AYAH= ?";
    var sql_var = [param.ID_AYAH];
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

const viewAllDataAyah = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_ayah";
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

const updateDataAyah = async (param, ID_AYAH) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE data_ayah set ID_SISWA=?, ID_KH=?, ID_PEKERJAAN=?, ID_PENDIDIKAN=?, ID_PENGHASILAN=?, NAMA=?, NIK_AYAH=?, TAHUN_LAHIR=? where ID_AYAH= ? ";
    var sql_var = [
      param.ID_SISWA,
      param.ID_KH,
      param.ID_PEKERJAAN,
      param.ID_PENDIDIKAN,
      param.ID_PENGHASILAN,
      param.NAMA,
      param.NIK_AYAH,
      param.TAHUN_LAHIR,
      ID_AYAH,
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

const deleteDataAyah = async (ID_AYAH) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM data_ayah where ID_AYAH= ? ";
    var sql_var = [ID_AYAH];
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
  insertDataAyah,
  updateDataAyah,
  viewDataAyah,
  deleteDataAyah,
  viewAllDataAyah,
};
