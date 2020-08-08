var db = require("../helper/DBUtil");

const insertSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " INSERT INTO data_pribadi " +
      " (ID_SISWA, ID_AGAMA, ID_PIP, ID_TRANSPORTASI, ID_TINGGAL,ID_KH, NAMA_LENGKAP, JENIS_KELAMIN, NISN, NIK_NO_KITAS, TEMPAT_LAHIR, TANGGAL_LAHIR, NAMA_NEGARA, ALAMAT_JALAN, RT, RW, NAMA_DUSUN, NAMA_KELURAHAN_DESA, KECAMATAN, KODE_POS, NO_KPS, NOMOR_KIP_, NAMA_TERTERA_KIP, NOMOR_KKS, BANK, NOMOR_AKTA_LAHIR, NO_REKENING_BANK, ATAS_NAMA ) " +
      " VALUES " +
      " ? ";

    var values = [
      [
        param.ID_SISWA,
        param.ID_AGAMA,
        param.ID_PIP,
        param.ID_TRANSPORTASI,
        param.ID_TINGGAL,
        param.ID_KH,
        param.NAMA_LENGKAP,
        param.JENIS_KELAMIN,
        param.NISN,
        param.NIK_NO_KITAS,
        param.TEMPAT_LAHIR,
        param.TANGGAL_LAHIR,
        param.NAMA_NEGARA,
        param.ALAMAT_JALAN,
        param.RT,
        param.RW,
        param.NAMA_DUSUN,
        param.NAMA_KELURAHAN_DESA,
        param.KECAMATAN,
        param.KODE_POS,
        param.NO_KPS,
        param.NOMOR_KIP_,
        param.NAMA_TERTERA_KIP,
        param.NOMOR_KKS,
        param.BANK,
        param.NOMOR_AKTA_LAHIR,
        param.NO_REKENING_BANK,
        param.ATAS_NAMA,
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

const viewSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_pribadi where ID_SISWA= ?";
    var sql_var = [param.ID_SISWA];
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

const viewAllSiswa = async (param) => {
  return new Promise(function (resolve, reject) {
    let sql = "SELECT * FROM data_pribadi";

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

const updateSiswa = async (param, ID_SISWA) => {
  return new Promise(function (resolve, reject) {
    let sql =
      " UPDATE data_pribadi set ID_AGAMA =?, ID_PIP=?, ID_TRANSPORTASI=?, ID_TINGGAL=?,ID_KH=?, NAMA_LENGKAP=?, JENIS_KELAMIN=?, NISN=?, NIK_NO_KITAS=?, TEMPAT_LAHIR=?, TANGGAL_LAHIR=?, NAMA_NEGARA=?, ALAMAT_JALAN=?, RT=?, RW=?, NAMA_DUSUN=?, NAMA_KELURAHAN_DESA=?, KECAMATAN=?, KODE_POS=?, NO_KPS=?, NOMOR_KIP_=?, NAMA_TERTERA_KIP=?, NOMOR_KKS=?, BANK=?, NOMOR_AKTA_LAHIR=?, NO_REKENING_BANK=?, ATAS_NAMA=? where ID_SISWA= ? ";
    var sql_var = [
      //   param.ID_SISWA,
      param.ID_AGAMA,
      param.ID_PIP,
      param.ID_TRANSPORTASI,
      param.ID_TINGGAL,
      param.ID_KH,
      param.NAMA_LENGKAP,
      param.JENIS_KELAMIN,
      param.NISN,
      param.NIK_NO_KITAS,
      param.TEMPAT_LAHIR,
      param.TANGGAL_LAHIR,
      param.NAMA_NEGARA,
      param.ALAMAT_JALAN,
      param.RT,
      param.RW,
      param.NAMA_DUSUN,
      param.NAMA_KELURAHAN_DESA,
      param.KECAMATAN,
      param.KODE_POS,
      param.NO_KPS,
      param.NOMOR_KIP_,
      param.NAMA_TERTERA_KIP,
      param.NOMOR_KKS,
      param.BANK,
      param.NOMOR_AKTA_LAHIR,
      param.NO_REKENING_BANK,
      param.ATAS_NAMA,

      ID_SISWA,
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

const deleteSiswa = async (ID_SISWA) => {
  return new Promise(function (resolve, reject) {
    let sql = " DELETE FROM data_pribadi where ID_SISWA = ? ";
    var sql_var = [ID_SISWA];
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
  insertSiswa,
  updateSiswa,
  viewSiswa,
  deleteSiswa,
  viewAllSiswa,
};
