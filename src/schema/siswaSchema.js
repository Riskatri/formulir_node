const { Joi } = require("celebrate");

const insertSiswaSchema = Joi.object()
  .keys({
    ID_SISWA: Joi.number().integer().required(),
    ID_AGAMA: Joi.string().max(10).required(),
    ID_PIP: Joi.number().integer().optional(),
    ID_TRANSPORTASI: Joi.number().integer().required(),
    ID_TINGGAL: Joi.number().integer().required(),
    ID_KH: Joi.number().integer().optional(),
    NAMA_LENGKAP: Joi.string().max(31).required(),
    JENIS_KELAMIN: Joi.string().max(15).required(),
    NISN: Joi.string().max(10).optional(),
    TEMPAT_LAHIR: Joi.string().max(31).required(),
    TANGGAL_LAHIR: Joi.date().required(),
    NAMA_NEGARA: Joi.string().max(15).required(),
    ALAMAT_JALAN: Joi.string().max(31).required(),
    RT: Joi.number().integer().required(),
    RW: Joi.number().integer().required(),
    NAMA_DUSUN: Joi.string().max(31).required(),
    NAMA_KELURAHAN_DESA: Joi.string().max(31).required(),
    KECAMATAN: Joi.string().max(31).required(),
    KODE_POS: Joi.string().max(5).required(),
    NO_KPS: Joi.string().max(15).optional(),
    NOMOR_KIP: Joi.string().max(6).optional(),
    NAMA_TERTERA_KIP: Joi.string().max(31).optional(),
    NOMOR_KKS: Joi.string().max(8).optional(),
    BANK: Joi.string().max(31).optional(),
    NOMOR_AKTA_LAHIR: Joi.string().max(18).required(),
    NO_REKENING_BANK: Joi.string().max(18).optional(),
    ATAS_NAMA: Joi.string().max(31).optional(),
  })
  .unknown(true);

const viewSiswaSchema = Joi.object()
  .keys({
    ID_SISWA: Joi.number().integer().required(),
  })
  .unknown(true);

const updateSiswaSchema = Joi.object()
  .keys({
    ID_SISWA: Joi.number().integer().required(),
    ID_AGAMA: Joi.string().max(10).required(),
    ID_PIP: Joi.number().integer().optional(),
    ID_TRANSPORTASI: Joi.number().integer().optional(),
    ID_TINGGAL: Joi.number().integer().optional(),
    ID_KH: Joi.number().integer().optional(),
    NAMA_LENGKAP: Joi.string().max(31).required(),
    JENIS_KELAMIN: Joi.string().max(15).required(),
    NISN: Joi.string().max(10).optional(),
    TEMPAT_LAHIR: Joi.string().max(31).required(),
    TANGGAL_LAHIR: Joi.date().required(),
    NAMA_NEGARA: Joi.string().max(15).required(),
    ALAMAT_JALAN: Joi.string().max(31).required(),
    RT: Joi.number().integer().required(),
    RW: Joi.number().integer().required(),
    NAMA_DUSUN: Joi.string().max(31).required(),
    NAMA_KELURAHAN_DESA: Joi.string().max(31).required(),
    KECAMATAN: Joi.string().max(31).required(),
    KODE_POS: Joi.string().max(5).required(),
    NO_KPS: Joi.string().max(15).optional(),
    NOMOR_KIP: Joi.string().max(6).optional(),
    NAMA_TERTERA_KIP: Joi.string().max(31).optional(),
    NOMOR_KKS: Joi.string().max(8).optional(),
    BANK: Joi.string().max(31).optional(),
    NOMOR_AKTA_LAHIR: Joi.string().max(18).required(),
    NO_REKENING_BANK: Joi.string().max(18).optional(),
    ATAS_NAMA: Joi.string().max(31).optional(),
  })
  .unknown(true);

const deleteSiswaSchema = Joi.object()
  .keys({
    ID_SISWA: Joi.number().integer().required(),
  })
  .unknown(true);

module.exports = {
  insertSiswaSchema,
  viewSiswaSchema,
  updateSiswaSchema,
  deleteSiswaSchema,
};
