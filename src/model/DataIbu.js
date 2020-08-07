var db = require("../helper/DBUtil");

const insertDataIbu = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO data_ibu" +
      " (ID_IBU, ID_SISWA, ID_KH, ID_PEKERJAAN, ID_PENDIDIKAN, ID_PENGHASILAN, NAMA, NIK_IBU, TAHUN_LAHIR) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_IBU,
        param.ID_SISWA,
        param.ID_KH,
        param.ID_PEKERJAAN,
        param.ID_PENDIDIKAN,
        param.ID_PENGHASILAN,
        param.NAMA,
        param.NIK_IBU,
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

const viewDataIbu = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_ibu where ID_IBU= ?";
    var sql_var = [param.ID_IBU];
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

const viewAllDataIbu = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_ibu";
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

const updateDataIbu = async (param, ID_IBU) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE data_ibu set ID_SISWA=?, ID_KH=?, ID_PEKERJAAN=?, ID_PENDIDIKAN=?, ID_PENGHASILAN=?, NAMA=?, NIK_IBU=?, TAHUN_LAHIR=? where ID_IBU= ? ";
    var sql_var = [
      param.ID_SISWA,
      param.ID_KH,
      param.ID_PEKERJAAN,
      param.ID_PENDIDIKAN,
      param.ID_PENGHASILAN,
      param.NAMA,
      param.NIK_IBU,
      param.TAHUN_LAHIR,
      ID_IBU,
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

const deleteDataIbu = async (ID_IBU) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM data_ibu where ID_IBU= ? ";
    var sql_var = [ID_IBU];
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
  insertDataIbu,
  updateDataIbu,
  viewDataIbu,
  deleteDataIbu,
  viewAllDataIbu,
};
