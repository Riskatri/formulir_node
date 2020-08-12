var db = require("../helper/DBUtil");

const insertBeasiswaSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO beasiswa " +
      " (BEASISWA_ID, ID_SISWA, ID_JENIS_BEASISWA, KETERANGAN, TAHUN_MULAI, TAHUN_SELESAI) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.BEASISWA_ID,
        param.ID_SISWA,
        param.ID_JENIS_BEASISWA,
        param.KETERANGAN,
        param.TAHUN_MULAI,
        param.TAHUN_SELESAI,
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

const viewBeasiswaSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM beasiswa where BEASISWA_ID= ?";
    var sql_var = [param.BEASISWA_ID];
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

const viewBeasiswaAllSiswa = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM beasiswa";
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

const updateBeasiswaSiswa = async (param, BEASISWA_ID) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE beasiswa set  ID_SISWA=?, ID_JENIS_BEASISWA=?, KETERANGAN=?, TAHUN_MULAI=?, TAHUN_SELESAI=? where BEASISWA_ID= ? ";
    var sql_var = [
      param.ID_SISWA,

      param.ID_JENIS_BEASISWA,
      param.KETERANGAN,
      param.TAHUN_MULAI,
      param.TAHUN_SELESAI,

      BEASISWA_ID,
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

const deleteBeasiswaSiswa = async (BEASISWA_ID) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM beasiswa where BEASISWA_ID= ? ";
    var sql_var = [BEASISWA_ID];
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
  insertBeasiswaSiswa,
  updateBeasiswaSiswa,
  viewBeasiswaSiswa,
  deleteBeasiswaSiswa,
  viewBeasiswaAllSiswa,
};
