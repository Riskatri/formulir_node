var db = require("../helper/DBUtil");

const insertPrestasiSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO prestasi_siswa " +
      " (ID_PRESTASI_SISWA, PRESTASI_ID, ID_SISWA, ID_TINGKAT, NAMA_PRESTASI, TAHUN, PENYELENGGARA) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_PRESTASI_SISWA,
        param.PRESTASI_ID,
        param.ID_SISWA,
        param.ID_TINGKAT,
        param.NAMA_PRESTASI,
        param.TAHUN,
        param.PENYELENGGARA,
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

const viewPrestasiSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM prestasi_siswa where ID_PRESTASI_SISWA= ?";
    var sql_var = [param.ID_PRESTASI_SISWA];
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

const viewPrestasiAllSiswa = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM prestasi_siswa ";

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

const updatePrestasiSiswa = async (param, ID_SISWA) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE prestasi_siswa set   ID_SISWA =?,PRESTASI_ID=?,ID_TINGKAT=?, NAMA_PRESTASI=?, TAHUN=?, PENYELENGGARA =? where ID_PRESTASI_SISWA= ? ";
    var sql_var = [
      param.ID_SISWA,

      param.PRESTASI_ID,
      param.ID_TINGKAT,
      param.NAMA_PRESTASI,
      param.TAHUN,
      param.PENYELENGGARA,
      ID_PRESTASI_SISWA,
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

const deletePrestasiSiswa = async (ID_SISWA) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM prestasi_siswa where ID_SISWA= ? ";
    var sql_var = [ID_SISWA];
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
  insertPrestasiSiswa,
  updatePrestasiSiswa,
  viewPrestasiSiswa,
  deletePrestasiSiswa,
  viewPrestasiAllSiswa,
};
