var db = require("../helper/DBUtil");

const insertKontak = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO kontak " +
      " (ID_KONTAK, ID_SISWA, NO_TELP, NO_HP, EMAIL) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_KONTAK,
        param.ID_SISWA,
        param.NO_TELP,
        param.NO_HP,
        param.EMAIL,
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

const viewKontak = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM kontak";
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

const viewKontakById = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM kontak where ID_KONTAK=?";
    var sql_var = [param.ID_KONTAK];
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

const updateKontak = async (param, ID_KONTAK) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE kontak set  ID_SISWA=?, NO_TELP=?, NO_HP=?, EMAIL=? where ID_KONTAK= ? ";
    var sql_var = [
      //   param.ID_SISWA,
      param.ID_SISWA,
      param.NO_TELP,
      param.NO_HP,
      param.EMAIL,

      ID_KONTAK,
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

const deleteKontak = async (ID_KONTAK) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM kontak where ID_KONTAK= ? ";
    var sql_var = [ID_KONTAK];
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
  insertKontak,
  updateKontak,
  viewKontak,
  deleteKontak,
  viewKontakById,
};
