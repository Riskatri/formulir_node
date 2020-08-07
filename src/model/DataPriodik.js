var db = require("../helper/DBUtil");

const insertDataPriodik = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO data_priodik" +
      " (ID_DATA_PRIODIK, ID_SISWA, TINGGI_BADAN, BERAT_BADAN, JARAK_KE_SEKOLAH, WAKTU_TEMPUH_KE_SEKOLAH, JUMLAH_SAUDARA_KANDUNG) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_DATA_PRIODIK,
        param.ID_SISWA,
        param.TINGGI_BADAN,
        param.BERAT_BADAN,
        param.JARAK_KE_SEKOLAH,
        param.WAKTU_TEMPUH_KE_SEKOLAH,
        param.JUMLAH_SAUDARA_KANDUNG,
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

const viewDataPriodik = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_priodik where ID_DATA_PRIODIK=?";
    var sql_var = [param.ID_DATA_PRIODIK];
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

const viewDataAllPriodik = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_priodik";

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

const updateDataPriodik = async (param, ID_DATA_PRIODIK) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE data_priodik set   ID_SISWA=?, TINGGI_BADAN=?, BERAT_BADAN=?, JARAK_KE_SEKOLAH=?, WAKTU_TEMPUH_KE_SEKOLAH=?, JUMLAH_SAUDARA_KANDUNG=? where ID_DATA_PRIODIK= ? ";
    var sql_var = [
      param.ID_SISWA,
      param.TINGGI_BADAN,
      param.BERAT_BADAN,
      param.JARAK_KE_SEKOLAH,
      param.WAKTU_TEMPUH_KE_SEKOLAH,
      param.JUMLAH_SAUDARA_KANDUNG,
      ID_DATA_PRIODIK,
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

const deleteDataPriodik = async (ID_DATA_PRIODIK) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM data_priodik where ID_DATA_PRIODIK= ? ";
    var sql_var = [ID_DATA_PRIODIK];
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
  insertDataPriodik,
  updateDataPriodik,
  viewDataPriodik,
  deleteDataPriodik,
  viewDataAllPriodik,
};
