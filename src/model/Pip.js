var db = require("../helper/DBUtil");

const insertPIP = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = " INSERT INTO pip " + " (ID_PIP, ALASAN) " + " VALUES " + " ? ";

    var values = [[param.ID_PIP, param.ALASAN]];

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

const viewPIP = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pip where ID_PIP= ?";
    var sql_var = [param.ID_PIP];
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

const viewAllPIP = async () => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM pip";

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

const updatePIP = async (param, ID_PIP) => {
  return new Promise(function (resolve, reject) {
    let sql = " UPDATE pip set ALASAN=? where ID_PIP= ? ";
    var sql_var = [param.ALASAN, ID_PIP];
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

const deletePIP = async (ID_PIP) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM pip where ID_PIP = ? ";
    var sql_var = [ID_PIP];
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

module.exports = { insertPIP, updatePIP, viewPIP, deletePIP, viewAllPIP };
