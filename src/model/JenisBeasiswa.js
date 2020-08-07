var db = require("../helper/DBUtil");

const insertBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO jenis_beasiswa " +
      " (ID_JENIS_BEASISWA, JENIS_BEASISWA) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_JENIS_BEASISWA, param.JENIS_BEASISWA]];

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

const viewBeasiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM jenis_beasiswa where ID_JENIS_BEASISWA= ?";
    var sql_var = [param.ID_JENIS_BEASISWA];
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

const viewAllBeasiswa = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM jenis_beasiswa";

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

const updateBeasiswa = async (param, ID_JENIS_BEASISWA) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE jenis_beasiswa set JENIS_BEASISWA=? where ID_JENIS_BEASISWA= ? ";
    var sql_var = [param.JENIS_BEASISWA, ID_JENIS_BEASISWA];
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

const deleteBeasiswa = async (ID_JENIS_BEASISWA) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM jenis_beasiswa where ID_JENIS_BEASISWA= ? ";
    var sql_var = [ID_JENIS_BEASISWA];
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
  insertBeasiswa,
  updateBeasiswa,
  viewBeasiswa,
  deleteBeasiswa,
  viewAllBeasiswa,
};
