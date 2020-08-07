var db = require("../helper/DBUtil");

const viewDataSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      "select data_pribadi.ID_SISWA, data_pribadi.NAMA_LENGKAP, substring((data_pribadi.JENIS_KELAMIN),1,1) as JENIS_KELAMIN,concat(data_pribadi.TEMPAT_LAHIR,',',DATE_FORMAT(data_pribadi.TANGGAL_LAHIR, '%d-%m %Y')) as TEMPAT_TANGGAL_LAHIR, da.NAMA_ORANGTUA_SISWA, data_pribadi.ALAMAT_JALAN as ALAMAT from data_pribadi INNER JOIN (SELECT data_ayah.NAMA as NAMA_ORANGTUA_SISWA, data_ayah.ID_SISWA from data_ayah as data_ayah) as da on data_pribadi.ID_SISWA = da.ID_SISWA";
    var sql_var = [
      param.ID_SISWA,
      param.NAMA_LENGKAP,
      param.JENIS_KELAMIN,
      param.TEMPAT_TANGGAL_LAHIR,
      param.NAMA_ORANGTUA_SISWA,
      param.ALAMAT,
    ];
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
  viewDataSiswa,
};
