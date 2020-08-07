var db = require("../helper/DBUtil");

const insertTingkat = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO tingkat_prestasi " +
      " (ID_TINGKAT, TINGKAT_PRESTASI) " +
      " VALUES " +
      " ? ";

    var values = [[param.ID_TINGKAT, param.TINGKAT_PRESTASI]];

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

const viewTingkat = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM tingkat_prestasi where ID_TINGKAT= ?";
    var sql_var = [param.ID_TINGKAT];
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

const viewAllTingkat = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM tingkat_prestasi";

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

const updateTingkat = async (param, ID_TINGKAT) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE tingkat_prestasi set TINGKAT_PRESTASI=? where ID_TINGKAT= ? ";
    var sql_var = [param.TINGKAT_PRESTASI, ID_TINGKAT];
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

const deleteTingkat = async (ID_TINGKAT) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM tingkat_prestasi where ID_TINGKAT= ? ";
    var sql_var = [ID_TINGKAT];
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
  insertTingkat,
  updateTingkat,
  viewTingkat,
  deleteTingkat,
  viewAllTingkat,
};
