var db = require("../helper/DBUtil");

const insertDaftarKeluarSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO daftar_keluar " +
      " (DAFTAR_KELUAR_ID, ID_SISWA, ID_ALASAN, TANGGAL_KELUAR, ALASAN) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.DAFTAR_KELUAR_ID,
        param.ID_SISWA,
        param.ID_ALASAN,
        param.TANGGAL_KELUAR,
        param.ALASAN,
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

const viewDaftarKeluarSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM daftar_keluar where DAFTAR_KELUAR_ID= ?";
    var sql_var = [param.DAFTAR_KELUAR_ID];
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

const viewAllDaftarKeluarSiswa = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM daftar_keluar";
    //   var sql_var = [param.DAFTAR_KELUAR_ID];
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

const updateDaftarKeluarSiswa = async (param, DAFTAR_KELUAR_ID) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE daftar_keluar set  ID_SISWA=?, ID_ALASAN=?, TANGGAL_KELUAR=?, ALASAN=? where DAFTAR_KELUAR_ID= ? ";
    var sql_var = [
      param.ID_SISWA,
      param.ID_ALASAN,
      param.TANGGAL_KELUAR,
      param.ALASAN,
      DAFTAR_KELUAR_ID,
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

const deleteDaftarKeluarSiswa = async (DAFTAR_KELUAR_ID) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM daftar_keluar where DAFTAR_KELUAR_ID= ? ";
    var sql_var = [DAFTAR_KELUAR_ID];
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
  insertDaftarKeluarSiswa,
  updateDaftarKeluarSiswa,
  viewDaftarKeluarSiswa,
  deleteDaftarKeluarSiswa,
  viewAllDaftarKeluarSiswa,
};
