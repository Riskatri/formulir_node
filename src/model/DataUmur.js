var db = require("../helper/DBUtil");

const viewDataUmur1 = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "select count(if(A.umur < 06.00,1,null) and if(A.jenis = 'PEREMPUAN',1,null)) as 'umur <06.00 (P)', count(if(A.umur <06.00,1,null) and if(A.jenis = 'LAKI-LAKI',1,null)) as 'umur <06.00(L)', sum(if(A.umur<06.00,1,null) and (if(A.jenis='PEREMPUAN' OR A.jenis='LAKI-LAKI',1, null))) as 'J' from (select data_pribadi.ID_SISWA, data_pribadi.TANGGAL_LAHIR, data_pribadi.JENIS_KELAMIN as jenis, TIMESTAMPDIFF(YEAR, data_pribadi.TANGGAL_LAHIR, CURRENT_DATE()) as umur from data_pribadi) as A";
    var sql_var = [param.ID_SISWA, param.TANGGAL_LAHIR, param.JENIS_KELAMIN];
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

const viewDataUmur2 = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "select count(if(A.umur BETWEEN 06.00 and 06.11,1,null) and if(A.jenis = 'PEREMPUAN',1,null)) as '06.00<umur<06.11 (P)', count(if(A.umur BETWEEN 06.00 and 06.11,1,null) and if(A.jenis = 'LAKI-LAKI',1,null)) as '06.00<umur<06.11 (L)', sum(if(A.umur BETWEEN 06 and 06.11,1,null) and (if(A.jenis='PEREMPUAN' OR A.jenis='LAKI-LAKI',1, null))) as 'J' from (select data_pribadi.ID_SISWA, data_pribadi.TANGGAL_LAHIR, data_pribadi.JENIS_KELAMIN as jenis, TIMESTAMPDIFF(YEAR, data_pribadi.TANGGAL_LAHIR, CURRENT_DATE()) as umur from data_pribadi) as A";
    var sql_var = [param.ID_SISWA, param.TANGGAL_LAHIR, param.JENIS_KELAMIN];
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

const viewDataUmur3 = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "select  count(if(A.umur >= 07.00,1,null) and if(A.jenis = 'PEREMPUAN',1,null)) as 'umur >=7.00 (P)', count(if(A.umur >= 07.00,1,null) and if(A.jenis = 'LAKI-LAKI',1,null)) as 'umur >=07.00 (L)', sum(if(A.umur>=7.00,1,null) and (if(A.jenis='PEREMPUAN' OR A.jenis='LAKI-LAKI',1, null))) as 'J'  from (select data_pribadi.ID_SISWA, data_pribadi.TANGGAL_LAHIR, data_pribadi.JENIS_KELAMIN as jenis, TIMESTAMPDIFF(YEAR, data_pribadi.TANGGAL_LAHIR, CURRENT_DATE()) as umur from data_pribadi) as A";
    var sql_var = [param.ID_SISWA, param.TANGGAL_LAHIR, param.JENIS_KELAMIN];
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

const viewDataTotalUmur = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "select sum(if(A.jenis='PEREMPUAN',1,null)) as 'total(P)', sum(if(A.jenis='LAKI-LAKI',1,null)) as 'total(L)', sum(if(A.jenis='PEREMPUAN' or A.jenis='LAKI-LAKI',1,null)) as 'total(J)' from (select data_pribadi.ID_SISWA, data_pribadi.TANGGAL_LAHIR, data_pribadi.JENIS_KELAMIN as jenis, TIMESTAMPDIFF(YEAR, data_pribadi.TANGGAL_LAHIR, CURRENT_DATE()) as umur from data_pribadi) as A";
    var sql_var = [param.ID_SISWA, param.TANGGAL_LAHIR, param.JENIS_KELAMIN];
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

module.exports = {
  viewDataUmur1,
  viewDataUmur2,
  viewDataUmur3,
  viewDataTotalUmur,
};
