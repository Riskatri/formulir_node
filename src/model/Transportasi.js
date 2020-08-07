var db = require("../helper/DBUtil");

const insertTransport = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO transportasi " +
      " (ID_TRANSPORTASI, JENIS) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_TRANSPORTASI, param.JENIS]];

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

const viewTransport = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM transportasi where ID_TRANSPORTASI= ?";
    var sql_var = [param.ID_TRANSPORTASI];
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

const viewAllTransport = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM transportasi";

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

const updateTransport = async (param, ID_TRANSPOSRTASI) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE transportasi set JENIS=? where ID_TRANSPORTASI= ? ";
    var sql_var = [param.ALASAN, ID_TRANSPOSRTASI];
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

const deleteTransport = async (ID_TRANSPORTASI) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM transportasi where ID_TRANSPORTASI= ? ";
    var sql_var = [ID_TRANSPORTASI];
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
  insertTransport,
  updateTransport,
  viewTransport,
  deleteTransport,
  viewAllTransport,
};
