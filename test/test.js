let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
var expect = require("chai").expect;

chai.should();
chai.use(chaiHttp);

//siswa
describe("Test API GET /api/v1/siswa/semua_siswa", () => {
  it("It should get all the task", (done) => {
    chai
      .request(server)
      .get("/api/v1/siswa/semua_siswa")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//get by id

describe("Test API GET /api/v1/siswa/:id", () => {
  it("It should get by id the task", (done) => {
    const ID_SISWA = 1;
    chai
      .request(server)
      .get("/api/v1/siswa?ID_SISWA=" + ID_SISWA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

// describe("Test API POST /api/v1/siswa/", () => {
//   it("It should post students", (done) => {
//     const result = {
//       ID_SISWA: 31,
//       ID_AGAMA: "1",
//       ID_PIP: 1,
//       ID_TRANSPORTASI: 2,
//       ID_TINGGAL: 1,
//       ID_KH: 3,
//       NAMA_LENGKAP: "AHYAR",
//       JENIS_KELAMIN: "LAKI-LAKI",
//       TEMPAT_LAHIR: "SERANG",
//       TANGGAL_LAHIR: "2014-11-01",
//       NAMA_NEGARA: "INDONESIA",
//       ALAMAT_JALAN: "KP KOPI BERA",
//       RT: 1,
//       RW: 1,
//       NAMA_DUSUN: "DUSUN PAHING",
//       NAMA_KELURAHAN_DESA: "CINANGKA",
//       KECAMATAN: "CINANGKA",
//       KODE_POS: "42167",
//       NO_KPS: "3DM1301991M",
//       NOMOR_KIP_: "P09Z26",
//       NAMA_TERTERA_KIP: "AHYAR",
//       NOMOR_KKS: "G630NC",
//       BANK: "BRI",
//       NOMOR_AKTA_LAHIR: "1511/A/2013",
//       NO_REKENING_BANK: "11232145",
//       ATAS_NAMA: "AHYAR",
//     };
//     chai
//       .request(server)
//       .post("/api/v1/siswa/")
//       .send(result)
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a("object");
//         done();
//       });
//   });
// });

describe("Test API PUT /api/v1/siswa/:id", () => {
  it("It should put by id the task", (done) => {
    const ID_SISWA = 30;
    const result = {
      ID_SISWA: 30,
      ID_AGAMA: "1",
      ID_PIP: 1,
      ID_TRANSPORTASI: 2,
      ID_TINGGAL: 1,
      ID_KH: 3,
      NAMA_LENGKAP: "AHYAR",
      JENIS_KELAMIN: "LAKI-LAKI",
      TEMPAT_LAHIR: "SERANG",
      TANGGAL_LAHIR: "2014-11-01",
      NAMA_NEGARA: "INDONESIA",
      ALAMAT_JALAN: "KP MANIS",
      RT: 1,
      RW: 1,
      NAMA_DUSUN: "DUSUN PAHING",
      NAMA_KELURAHAN_DESA: "CINANGKA",
      KECAMATAN: "CINANGKA",
      KODE_POS: "42167",
      NO_KPS: "3DM1301991M",
      NOMOR_KIP_: "P09Z26",
      NAMA_TERTERA_KIP: "AHYAR",
      NOMOR_KKS: "G630NC",
      BANK: "BRI",
      NOMOR_AKTA_LAHIR: "1511/A/2013",
      NO_REKENING_BANK: "11232145",
      ATAS_NAMA: "AHYAR",
    };
    chai
      .request(server)
      .put("/api/v1/siswa?ID_SISWA=" + ID_SISWA)
      .send(result)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("TEST API delete /api/v1/siswa/:id", () => {
  it("It should delete the student", (done) => {
    const ID_SISWA = 31;
    chai
      .request(server)
      .delete("/api/v1/siswa?ID_SISWA=" + ID_SISWA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//agama
describe("Test API GET /api/v1/agama/semua_agama", () => {
  it("It should get all the religion", (done) => {
    chai
      .request(server)
      .get("/api/v1/agama/semua_agama")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done();
      });
  });
});

describe("Test API GET /api/v1/agama/:id", () => {
  it("It should get by id the religion", (done) => {
    const ID_AGAMA = 1;
    chai
      .request(server)
      .get("/api/v1/agama?ID_AGAMA=" + ID_AGAMA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done();
      });
  });
});

// describe("Test API POST /api/v1/agama/", () => {
//   it("It should post the religion", (done) => {
//     const result = {
//       ID_AGAMA: "8",
//       JENIS_AGAMA: "non agama",
//     };
//     chai
//       .request(server)
//       .post("/api/v1/agama/")
//       .send(result)
//       .end((err, response) => {
//         response.should.have.status(200);
//         response.body.should.be.a("object");
//         done();
//       });
//   });
// });

describe("Test API PUT /api/v1/agama/:id", () => {
  it("It should put the religion", (done) => {
    const ID_AGAMA = "7";
    const result = {
      ID_AGAMA: "7",
      JENIS_AGAMA: "tidak mempunyai agama",
    };
    chai
      .request(server)
      .put("/api/v1/agama?ID_AGAMA=" + ID_AGAMA)
      .send(result)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API delete /api/v1/agama/:id", () => {
  it("It should delete some the religion", (done) => {
    const ID_AGAMA = "8";
    chai
      .request(server)
      .delete("/api/v1/agama?ID_AGAMA=" + ID_AGAMA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API get /api/v1/alasan_keluar/semua_alasan", () => {
  it("it should get all reason", (done) => {
    chai
      .request(server)
      .get("/api/v1/alasan_keluar/semua_alasan")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API get /api/v1/alasan_keluar/:id", () => {
  const ID_ALASAN = 1;
  it("it should get reason by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/alasan_keluar?ID_ALASAN=" + ID_ALASAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API post /api/v1/alasan_keluar/", () => {
  const alasan = {
    ID_ALASAN: 9,
    KELUAR_KARNA: "LAINNYA",
  };
  it("it should post a reason", (done) => {
    chai
      .request(server)
      .post("/api/v1/alasan_keluar/")
      .send(alasan)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API put /api/v1/alasan_keluar/:id", () => {
  const ID_ALASAN = 9;
  const alasan = {
    ID_ALASAN: 9,
    KELUAR_KARNA: "LAINNYA",
  };
  it("it should put a reason", (done) => {
    chai
      .request(server)
      .put("/api/v1/alasan_keluar?ID_ALASAN=" + ID_ALASAN)
      .send(alasan)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API delete /api/v1/alasan_keluar/:id", () => {
  const ID_ALASAN = 9;
  it("it should delete a reason", (done) => {
    chai
      .request(server)
      .delete("/api/v1/alasan_keluar?ID_ALASAN=" + ID_ALASAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//beasiswa
describe("Test API GET /api/v1/jenis_beasiswa/semua_beasiswa", () => {
  it("it should GET scholarship", (done) => {
    chai
      .request(server)
      .get("/api/v1/jenis_beasiswa/semua_beasiswa")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API GET /api/v1/jenis_beasiswa/:id", () => {
  const ID_JENIS_BEASISWA = 1;
  it("it should GET scholarship by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/jenis_beasiswa?ID_JENIS_BEASISWA=" + ID_JENIS_BEASISWA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API POST /api/v1/jenis_beasiswa", () => {
  it("it should POST scholarship", (done) => {
    const jenis_beasiswa = {
      ID_JENIS_BEASISWA: 101,
      JENIS_BEASISWA: "Lain-lain",
    };
    chai
      .request(server)
      .post("/api/v1/jenis_beasiswa/")
      .send(jenis_beasiswa)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API PUT /api/v1/jenis_beasiswa", () => {
  it("it should PUT scholarship", (done) => {
    const jenis_beasiswa = {
      ID_JENIS_BEASISWA: 101,
      JENIS_BEASISWA: "Lainnya",
    };
    chai
      .request(server)
      .put("/api/v1/jenis_beasiswa/")
      .send(jenis_beasiswa)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API delete /api/v1/jenis_beasiswa", () => {
  it("it should delete scholarship", (done) => {
    const ID_JENIS_BEASISWA = 101;
    chai
      .request(server)
      .delete("/api/v1/jenis_beasiswa?ID_JENIS_BEASISWA=" + ID_JENIS_BEASISWA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//daftar keluar

describe("Test API GET /api/v1/daftar_keluar/semua_daftar_siswa", () => {
  it("it should GET out students", (done) => {
    chai
      .request(server)
      .get("/api/v1/daftar_keluar/semua_daftar_siswa")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API GET /api/v1/daftar_keluar/:id", () => {
  const DAFTAR_KELUAR_ID = 1;
  it("it should GET out students by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/daftar_keluar?DAFTAR_KELUAR_ID=" + DAFTAR_KELUAR_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API POST /api/v1/daftar_keluar/", () => {
  const daftar_keluar = {
    DAFTAR_KELUAR_ID: "c012",
    ID_SISWA: 2,
    ID_ALASAN: 1,
    TANGGAL_KELUAR: "2020-03-14",
    ALASAN: "ADA DEH",
  };
  it("it should POST out students", (done) => {
    chai
      .request(server)
      .post("/api/v1/daftar_keluar/")
      .send(daftar_keluar)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API PUT /api/v1/daftar_keluar/:id", () => {
  const DAFTAR_KELUAR_ID = "c012";
  const daftar_keluar = {
    DAFTAR_KELUAR_ID: "c012",
    ID_SISWA: 2,
    ID_ALASAN: 1,
    TANGGAL_KELUAR: "2019-03-14",
    ALASAN: "ADA DEH",
  };
  it("it should PUT out students", (done) => {
    chai
      .request(server)
      .put("/api/v1/daftar_keluar?DAFTAR_KELUAR_ID=" + DAFTAR_KELUAR_ID)
      .send(daftar_keluar)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API delete /api/v1/daftar_keluar/:id", () => {
  const DAFTAR_KELUAR_ID = "c012";
  it("it should DELETE out students", (done) => {
    chai
      .request(server)
      .delete("/api/v1/daftar_keluar?DAFTAR_KELUAR_ID=" + DAFTAR_KELUAR_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//data ayah

describe("Test API GET /api/v1/data_ayah/semua_data_ayah", () => {
  it("it should GET father's students", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_ayah/semua_data_ayah")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API GET /api/v1/data_ayah/:id", () => {
  const ID_AYAH = "A001";
  it("it should GET father's students by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_ayah?ID_AYAH=" + ID_AYAH)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API POST /api/v1/data_ayah", () => {
  const ayah = {
    ID_AYAH: "A014",
    ID_SISWA: 12,
    ID_PEKERJAAN: 9,
    ID_PENDIDIKAN: 5,
    ID_PENGHASILAN: 2,
    ID_KH: 3,
    NAMA: "DADANG S",
    NIK_AYAH: "3208015701977007",
    TAHUN_LAHIR: "1977",
  };
  it("it should POST father's students", (done) => {
    chai
      .request(server)
      .post("/api/v1/data_ayah/")
      .send(ayah)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API PUT /api/v1/data_ayah/:id", () => {
  const ayah = {
    ID_AYAH: "A014",
    ID_SISWA: 12,
    ID_PEKERJAAN: 9,
    ID_PENDIDIKAN: 5,
    ID_PENGHASILAN: 2,
    ID_KH: 3,
    NAMA: "RONI",
    NIK_AYAH: "3208015701977007",
    TAHUN_LAHIR: "1977",
  };
  it("it should PUT father's students", (done) => {
    chai
      .request(server)
      .put("/api/v1/data_ayah?ID_AYAH=" + ayah.ID_AYAH)
      .send(ayah)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API DELETE /api/v1/data_ayah/:id", () => {
  const ID_AYAH = "A014";
  it("it should POST father's students", (done) => {
    chai
      .request(server)
      .delete("/api/v1/data_ayah?ID_AYAH=" + ID_AYAH)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//data ibu
describe("test API GET /api/v1/data_ibu/semua_data_ibu", () => {
  it("it should GET mother's students", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_ibu/semua_data_ibu")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("test API GET /api/v1/data_ibu/:id", () => {
  const ID_IBU = "A001";
  it("it should GET mother's  by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_ibu?ID_IBU=" + ID_IBU)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API POST /api/v1/data_ibu", () => {
  const ibu = {
    ID_IBU: "A004",
    ID_SISWA: 12,
    ID_PEKERJAAN: 9,
    ID_PENDIDIKAN: 5,
    ID_PENGHASILAN: 2,
    ID_KH: 1,
    NAMA: "RANI",
    NIK_IBU: "3208015701977007",
    TAHUN_LAHIR: "1977",
  };
  it("it should POST mothers's students", (done) => {
    chai
      .request(server)
      .post("/api/v1/data_ibu/")
      .send(ibu)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API PUT /api/v1/data_ibu/:id", () => {
  const ibu = {
    ID_IBU: "A004",
    ID_SISWA: 12,
    ID_PEKERJAAN: 9,
    ID_PENDIDIKAN: 5,
    ID_PENGHASILAN: 2,
    ID_KH: 1,
    NAMA: "RANI",
    NIK_IBU: "3208015701977008",
    TAHUN_LAHIR: "1977",
  };
  it("it should PUT mothers's students", (done) => {
    chai
      .request(server)
      .put("/api/v1/data_ibu?ID_IBU=" + ibu.ID_IBU)
      .send(ibu)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API DELETE /api/v1/data_ibu/:id", () => {
  const ID_IBU = "A004";
  it("it should DELETE mothers's students", (done) => {
    chai
      .request(server)
      .delete("/api/v1/data_ibu?ID_IBU=" + ID_IBU)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//data priodik
describe("Test API GET /api/v1/data_priodik/semua_data_priodik", () => {
  it("it should GET priodik students", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_priodik/semua_data_priodik")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API GET /api/v1/data_priodik/:id", () => {
  const ID_DATA_PRIODIK = "A001";
  it("it should GET priodik students by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_priodik?ID_DATA_PRIODIK=" + ID_DATA_PRIODIK)
      .end((err, response) => {
        expect(response).to.have.status(200);

        done(err);
      });
  });
});

describe("Test API POST /api/v1/data_priodik", () => {
  const data_priodik = {
    ID_DATA_PRIODIK: "A003",
    ID_SISWA: 2,
    TINGGI_BADAN: 150,
    BERAT_BADAN: 40,
    JARAK_KE_SEKOLAH: 150,
    WAKTU_TEMPUH_KE_SEKOLAH: "09:10",
    JUMLAH_SAUDARA_KANDUNG: 9,
  };
  it("it should POST priodik students", (done) => {
    chai
      .request(server)
      .post("/api/v1/data_priodik/")
      .send(data_priodik)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API PUT /api/v1/data_priodik", () => {
  const data_priodik = {
    ID_DATA_PRIODIK: "A003",
    ID_SISWA: 2,
    TINGGI_BADAN: 155,
    BERAT_BADAN: 40,
    JARAK_KE_SEKOLAH: 140,
    WAKTU_TEMPUH_KE_SEKOLAH: "09:10",
    JUMLAH_SAUDARA_KANDUNG: 9,
  };
  it("it should PUT priodik students", (done) => {
    chai
      .request(server)
      .put(
        "/api/v1/data_priodik?ID_DATA_PRIODIK=" + data_priodik.ID_DATA_PRIODIK
      )
      .send(data_priodik)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API DELETE /api/v1/data_priodik", () => {
  const ID_DATA_PRIODIK = "A003";
  it("it should DELETE priodik students", (done) => {
    chai
      .request(server)
      .delete("/api/v1/data_priodik?ID_DATA_PRIODIK=" + ID_DATA_PRIODIK)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

//data wali

describe("Test API GET /api/v1/data_wali/semua_data_wali", () => {
  it("it should GET Wali's students", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_wali/semua_data_wali")
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API GET /api/v1/data_wali/:id", () => {
  const ID_WALI = "A002";
  it("it should GET Wali's students by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/data_wali?ID_WALI=" + ID_WALI)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});

describe("Test API POST /api/v1/data_wali", () => {
  const wali = {
    ID_WALI: "A003",
    ID_SISWA: 2,
    ID_PEKERJAAN: 5,
    ID_PENDIDIKAN: 6,
    NAMA_WALI: "ahwal",
    NIK_WALI: "3110192",
    TAHUN_LAHIR: "1960",
  };
  it("it should POST Wali's students", (done) => {
    chai
      .request(server)
      .post("/api/v1/data_wali/")
      .send(wali)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API PUT /api/v1/data_wali", () => {
  const wali = {
    ID_WALI: "A003",
    ID_SISWA: 2,
    ID_PEKERJAAN: 5,
    ID_PENDIDIKAN: 6,
    NAMA_WALI: "ahwal",
    NIK_WALI: "3110191",
    TAHUN_LAHIR: "1960",
  };
  it("it should PUT Wali's students", (done) => {
    chai
      .request(server)
      .put("/api/v1/data_wali?ID_WALI=" + wali.ID_WALI)
      .send(wali)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        done(err);
      });
  });
});

describe("Test API DELETE /api/v1/data_wali", () => {
  const ID_WALI = "A003";

  it("it should PUT Wali's students", (done) => {
    chai
      .request(server)
      .delete("/api/v1/data_wali?ID_WALI=" + ID_WALI)
      .end((err, response) => {
        expect(response).to.have.status(200);
        done(err);
      });
  });
});
