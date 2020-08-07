var db = require("../helper/DBUtil");

const insertRegistrasiSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO registrasi " +
      " (REGISTRASI_ID, ID_SISWA, ID_PENDAFTARAN, TANGGAL_MASUK, NIS, NOMOR_PESERTA_UJIAN, NO_SERI_IJAZAH, NO_SERI_SKHUS) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.REGISTRASI_ID,
        param.ID_SISWA,
        param.ID_PENDAFTARAN,
        param.TANGGAL_MASUK,
        param.NIS,
        param.NOMOR_PESERTA_UJIAN,
        param.NO_SERI_IJAZAH,
        param.NO_SERI_SKHUS,
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

const viewRegistrasiSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM registrasi where REGISTRASI_ID= ?";
    var sql_var = [param.REGISTRASI_ID];
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

const viewAllRegistrasiSiswa = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM registrasi";

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

const updateRegistrasiSiswa = async (param, REGISTRASI_ID) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE registrasi set ID_SISWA =?, ID_PENDAFTARAN=?, TANGGAL_MASUK=?, NIS=?, NOMOR_PESERTA_UJIAN=?, NO_SERI_IJaZAH=?, NO_SERI_SKHUS=? where REGISTRASI_ID= ? ";
    var sql_var = [
      //   param.ID_SISWA,
      param.ID_SISWA,
      param.ID_PENDAFTARAN,
      param.TANGGAL_MASUK,
      param.NIS,
      param.NOMOR_PESERTA_UJIAN,
      param.NO_SERI_IJAZAH,
      param.NO_SERI_SKHUS,
      REGISTRASI_ID,
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

const deleteRegistrasiSiswa = async (REGISTRASI_ID) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM registrasi where REGISTRASI_ID= ? ";
    var sql_var = [REGISTRASI_ID];
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
  insertRegistrasiSiswa,
  updateRegistrasiSiswa,
  viewRegistrasiSiswa,
  deleteRegistrasiSiswa,
  viewAllRegistrasiSiswa,
};
