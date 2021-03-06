const { Router } = require("express");
const agamaRouter = require("./agamaRouter");
const siswaRouter = require("./siswaRouter");
const pipRouter = require("./pipRouter");
const transportRouter = require("./transportRouter");
const tempatRouter = require("./tempatRouter");
const khRouter = require("./khRouter");
const pendidikanRouter = require("./pendidikanRouter");
const pekerjaanRouter = require("./pekerjaanRouter");
const penghasilanRouter = require("./penghasilanRouter");
const tingkatPrestasiRouter = require("./tingkatPrestasiRouter");
const prestasiRouter = require("./prestasiRouter");
const prestasiSiswaRouter = require("./prestasiSiswaRouter");
const jenisBeasiswaRouter = require("./jenisBeasiswaRouter");
const beasiswaRouter = require("./beasiswaRouter");
const pendaftaranRouter = require("./pendaftaranRouter");
const registrasiRouter = require("./registrasiRouter");
const alasanRouter = require("./alasanRouter");
const daftarKeluarRouter = require("./daftarKeluarRouter");
const dataAyahRouter = require("./dataAyahRouter");
const dataIbuRouter = require("./dataIbuRouter");
const dataWaliRouter = require("./dataWaliRouter");
const kontakRouter = require("./kontakRouter");
const dataPriodikRouter = require("./dataPriodikRouter");
const dataSiswaRouter = require("./dataSiswaRouter");
const dataUmurRouter = require("./dataUmurRouter");

const routes = Router();
routes.use("/agama", agamaRouter);
routes.use("/siswa", siswaRouter);
routes.use("/pip", pipRouter);
routes.use("/transport", transportRouter);
routes.use("/tempat_tinggal", tempatRouter);
routes.use("/kh", khRouter);
routes.use("/pendidikan", pendidikanRouter);
routes.use("/pekerjaan", pekerjaanRouter);
routes.use("/penghasilan", penghasilanRouter);
routes.use("/tingkat_prestasi", tingkatPrestasiRouter);
routes.use("/prestasi", prestasiRouter);
routes.use("/prestasi_siswa", prestasiSiswaRouter);
routes.use("/jenis_beasiswa", jenisBeasiswaRouter);
routes.use("/beasiswa", beasiswaRouter);
routes.use("/pendaftaran", pendaftaranRouter);
routes.use("/registrasi", registrasiRouter);
routes.use("/alasan_keluar", alasanRouter);
routes.use("/daftar_keluar", daftarKeluarRouter);
routes.use("/data_ayah", dataAyahRouter);
routes.use("/data_ibu", dataIbuRouter);
routes.use("/data_wali", dataWaliRouter);
routes.use("/contact", kontakRouter);
routes.use("/data_priodik", dataPriodikRouter);
routes.use("/data_lengkap_siswa", dataSiswaRouter);
routes.use("/age", dataUmurRouter);

module.exports = routes;
