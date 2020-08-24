let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
var expect = require("chai").expect;
const fs = require("fs");

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
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result.some((item) => item.ID_SISWA));
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/siswa/", () => {
  it("It should post students", (done) => {
    const result = {
      ID_SISWA: 31,
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
      ALAMAT_JALAN: "KP KOPI BERA",
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
      .post("/api/v1/siswa/")
      .send(result)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        done();
      });
  });
});

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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(7);
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
        expect(response.body.result.some((item) => item.ID_AGAMA));
        expect(response.body.result).to.have.lengthOf(1);
        done();
      });
  });
});

describe("Test API POST /api/v1/agama/", () => {
  it("It should post the religion", (done) => {
    const result = {
      ID_AGAMA: "8",
      JENIS_AGAMA: "non agama",
    };
    chai
      .request(server)
      .post("/api/v1/agama/")
      .send(result)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        done();
      });
  });
});

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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(8);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result.some((item) => item.ID_ALASAN));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(5);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result.some((item) => item.ID_JENIS_BEASISWA));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.DAFTAR_KELUAR_ID));
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_AYAH));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_IBU));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_DATA_PRIODIK));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_WALI));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
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
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//kebutuhan khusus
describe("Test API GET /api/v1/kh", () => {
  it("it should GET KH", (done) => {
    chai
      .request(server)
      .get("/api/v1/kh/semua_kh")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(18);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/kh/:id", () => {
  const ID_KH = 1;
  it("it should GET KH by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/kh?ID_KH=" + ID_KH)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/kh/", () => {
  const kh = {
    ID_KH: 20,
    JENIS_KH: "Autis",
  };
  it("it should POST KH ", (done) => {
    chai
      .request(server)
      .post("/api/v1/kh/")
      .send(kh)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/kh/:id", () => {
  const kh = {
    ID_KH: 20,
    JENIS_KH: "Autisme",
  };
  it("it should PUT KH ", (done) => {
    chai
      .request(server)
      .put("/api/v1/kh?ID_KH=" + kh.ID_KH)
      .send(kh)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/kh/:id", () => {
  const ID_KH = 20;
  it("it should delete KH ", (done) => {
    chai
      .request(server)
      .delete("/api/v1/kh?ID_KH=" + ID_KH)
      .end((err, response) => {
        expect(response).to.have.status(200);

        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//kontak
describe("Test API GET /api/v1/contact/all_contact", () => {
  it("it should GET all contact ", (done) => {
    chai
      .request(server)
      .get("/api/v1/contact/all_contact")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/contact/:id", () => {
  const ID_KONTAK = "S001";
  it("it should GET contact by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/contact?ID_KONTAK=" + ID_KONTAK)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_KONTAK));
        expect(response.body.result).to.have.lengthOf(1);

        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/contact/", () => {
  const contact = {
    ID_KONTAK: "S003",
    ID_SISWA: 3,
    NO_TELP: "0810202020",
    EMAIL: "haaa@gmail.com",
  };
  it("it should POST contact", (done) => {
    chai
      .request(server)
      .post("/api/v1/contact/")
      .send(contact)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/contact/:id", () => {
  const contact = {
    ID_KONTAK: "S003",
    ID_SISWA: 3,
    NO_TELP: "0810202020",
    EMAIL: "haaa@gmail.com",
  };
  it("it should PUT contact", (done) => {
    chai
      .request(server)
      .put("/api/v1/contact?ID_KONTAK=" + contact.ID_KONTAK)
      .send(contact)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API delete /api/v1/contact/:id", () => {
  const ID_KONTAK = "S003";
  it("it should delete contact by id", (done) => {
    chai
      .request(server)
      .delete("/api/v1/contact?ID_KONTAK=" + ID_KONTAK)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//pekerjaan

describe("Test API GET /api/v1/pekerjaan/semua_pekerjaan", () => {
  it("it should GET all jobs", (done) => {
    chai
      .request(server)
      .get("/api/v1/pekerjaan/semua_pekerjaan")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(13);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/pekerjaan/:id", () => {
  const ID_PEKERJAAN = 1;
  it("it should GET job by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/pekerjaan?ID_PEKERJAAN=" + ID_PEKERJAAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_PEKERJAAN));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API post /api/v1/pekerjaan/", () => {
  const pekerjaan = {
    ID_PEKERJAAN: 100,
    JENIS_PEKERJAAN: "Lainnya",
  };
  it("it should post jobs", (done) => {
    chai
      .request(server)
      .post("/api/v1/pekerjaan/")
      .send(pekerjaan)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/pekerjaan/", () => {
  const pekerjaan = {
    ID_PEKERJAAN: 100,
    JENIS_PEKERJAAN: "Lainnya",
  };
  it("it should PUT jobs", (done) => {
    chai
      .request(server)
      .put("/api/v1/pekerjaan?ID_PEKERJAAN=" + pekerjaan.ID_PEKERJAAN)
      .send(pekerjaan)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/pekerjaan/", () => {
  const ID_PEKERJAAN = 100;
  it("it should delete jobs", (done) => {
    chai
      .request(server)
      .delete("/api/v1/pekerjaan?ID_PEKERJAAN=" + ID_PEKERJAAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//pendaftaran

describe("Test API GET /api/v1/pendaftaran/semua_pendaftaran", () => {
  it("it should GET Registration", (done) => {
    chai
      .request(server)
      .get("/api/v1/pendaftaran/semua_pendaftaran")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/pendaftaran/:id", () => {
  const ID_PENDAFTARAN = 1;
  it("it should GET Registration by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/pendaftaran?ID_PENDAFTARAN=" + ID_PENDAFTARAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_PENDAFTARAN));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/pendaftaran/", () => {
  const regis = {
    ID_PENDAFTARAN: 3,
    JENIS: "Pindahan",
  };
  it("it should POST Registration", (done) => {
    chai
      .request(server)
      .post("/api/v1/pendaftaran/")
      .send(regis)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/pendaftaran/:id", () => {
  const regis = {
    ID_PENDAFTARAN: 3,
    JENIS: "Pindahan",
  };
  it("it should PUT Registration", (done) => {
    chai
      .request(server)
      .put("/api/v1/pendaftaran?ID_PENDAFTARAN=" + regis.ID_PENDAFTARAN)
      .send(regis)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/pendaftaran/:id", () => {
  const ID_PENDAFTARAN = 3;
  it("it should PUT Registration", (done) => {
    chai
      .request(server)
      .delete("/api/v1/pendaftaran?ID_PENDAFTARAN=" + ID_PENDAFTARAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//pendidikan

describe("Test API GET /api/v1/pendidikan/semua_pendidikan", () => {
  it("it should GET all education", (done) => {
    chai
      .request(server)
      .get("/api/v1/pendidikan/semua_pendidikan")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(11);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/pendidikan/:id", () => {
  const ID_PENDIDIKAN = 1;
  it("it should GET education by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/pendidikan?ID_PENDIDIKAN=" + ID_PENDIDIKAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_PENDIDIKAN));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/pendidikan/", () => {
  const edu = {
    ID_PENDIDIKAN: 12,
    JENJANG_PENDIDIKAN: "prof",
  };
  it("it should POST education", (done) => {
    chai
      .request(server)
      .post("/api/v1/pendidikan/")
      .send(edu)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/pendidikan/:id", () => {
  const edu = {
    ID_PENDIDIKAN: 12,
    JENJANG_PENDIDIKAN: "prof",
  };
  it("it should PUT education", (done) => {
    chai
      .request(server)
      .put("/api/v1/pendidikan?ID_PENDIDIKAN=" + edu.ID_PENDIDIKAN)
      .send(edu)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/pendidikan/:id", () => {
  const ID_PENDIDIKAN = 12;

  it("it should delete education", (done) => {
    chai
      .request(server)
      .delete("/api/v1/pendidikan?ID_PENDIDIKAN=" + ID_PENDIDIKAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//penghasilan

describe("Test API GET /api/v1/penghasilan/semua_penghasilan", () => {
  it("it should GET all income", (done) => {
    chai
      .request(server)
      .get("/api/v1/penghasilan/semua_penghasilan")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(6);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/penghasilan/:id", () => {
  const ID_PENGHASILAN = 1;
  it("it should GET income by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/penghasilan?ID_PENGHASILAN=" + ID_PENGHASILAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_PENGHASILAN));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/penghasilan/", () => {
  const penghasilan = {
    ID_PENGHASILAN: 7,
    PENGHASILAN: "lebih dari 20juta",
  };
  it("it should POST income", (done) => {
    chai
      .request(server)
      .post("/api/v1/penghasilan/")
      .send(penghasilan)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/penghasilan/:id", () => {
  const penghasilan = {
    ID_PENGHASILAN: 7,
    PENGHASILAN: "lebih dari 20juta",
  };
  it("it should PUT income", (done) => {
    chai
      .request(server)
      .put("/api/v1/penghasilan?ID_PENGHASILAN=" + penghasilan.ID_PENGHASILAN)
      .send(penghasilan)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/penghasilan/", () => {
  const ID_PENGHASILAN = 7;
  it("it should PUT income", (done) => {
    chai
      .request(server)
      .delete("/api/v1/penghasilan?ID_PENGHASILAN=" + ID_PENGHASILAN)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//PIP
describe("Test API GET /api/v1/pip/semua_pip", () => {
  it("it should GET PIP", (done) => {
    chai
      .request(server)
      .get("/api/v1/pip/semua_pip")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(11);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/pip/:id", () => {
  const ID_PIP = 1;
  it("it should GET PIP by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/pip?ID_PIP=" + ID_PIP)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_PIP));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/pip/", () => {
  const pip = {
    ID_PIP: 13,
    ALASAN: "belum layak",
  };
  it("it should POST PIP", (done) => {
    chai
      .request(server)
      .post("/api/v1/pip/")
      .send(pip)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/pip/:id", () => {
  const pip = {
    ID_PIP: 13,
    ALASAN: "layak",
  };
  it("it should PUT PIP", (done) => {
    chai
      .request(server)
      .put("/api/v1/pip?ID_PIP=" + pip.ID_PIP)
      .send(pip)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});
describe("Test API DELETE /api/v1/pip/", () => {
  const ID_PIP = 13;
  it("it should delete PIP", (done) => {
    chai
      .request(server)
      .delete("/api/v1/pip?ID_PIP=" + ID_PIP)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//prestasi

describe("Test API GET /api/v1/prestasi/semua_prestasi", () => {
  it("it should GET reward", (done) => {
    chai
      .request(server)
      .get("/api/v1/prestasi/semua_prestasi")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(4);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/prestasi/:id", () => {
  const PRESTASI_ID = 1;
  it("it should GET reward by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/prestasi?PRESTASI_ID=" + PRESTASI_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.PRESTASI_ID));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/prestasi/", () => {
  const prestasi = {
    PRESTASI_ID: "5",
    JENIS: "Lainnnya",
  };
  it("it should POST reward", (done) => {
    chai
      .request(server)
      .post("/api/v1/prestasi/")
      .send(prestasi)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/prestasi/:id", () => {
  const prestasi = {
    PRESTASI_ID: "5",
    JENIS: "Lainnnya",
  };
  it("it should PUT reward", (done) => {
    chai
      .request(server)
      .put("/api/v1/prestasi?PRESTASI_ID=" + prestasi.PRESTASI_ID)
      .send(prestasi)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/prestasi/:id", () => {
  const PRESTASI_ID = 5;
  it("it should DELETE reward", (done) => {
    chai
      .request(server)
      .delete("/api/v1/prestasi?PRESTASI_ID=" + PRESTASI_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//prestasi siswa
describe("Test GET /api/v1/prestasi_siswa/semua_prestasi_siswa", () => {
  it("it should GET student reward", (done) => {
    chai
      .request(server)
      .get("/api/v1/prestasi_siswa/semua_prestasi_siswa")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test GET /api/v1/prestasi_siswa/:id", () => {
  const ID_PRESTASI_SISWA = 1;
  it("it should GET student reward by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/prestasi_siswa?ID_PRESTASI_SISWA=" + ID_PRESTASI_SISWA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_PRESTASI_SISWA));
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test POST /api/v1/prestasi_siswa/", () => {
  const reward = {
    ID_PRESTASI_SISWA: "5",
    PRESTASI_ID: "1",
    ID_SISWA: 2,
    ID_TINGKAT: 1,
    NAMA_PRESTASI: "aas",
    TAHUN: 2014,
    PENYELENGGARA: "sekolah",
  };
  it("it should POST student reward", (done) => {
    chai
      .request(server)
      .post("/api/v1/prestasi_siswa/")
      .send(reward)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test PUT /api/v1/prestasi_siswa/:id", () => {
  const reward = {
    ID_PRESTASI_SISWA: "5",
    PRESTASI_ID: "1",
    ID_SISWA: 2,
    ID_TINGKAT: 1,
    NAMA_PRESTASI: "olim",
    TAHUN: 2014,
    PENYELENGGARA: "sekolah",
  };
  it("it should PUT student reward", (done) => {
    chai
      .request(server)
      .put(
        "/api/v1/prestasi_siswa?ID_PRESTASI_SISWA=" + reward.ID_PRESTASI_SISWA
      )
      .send(reward)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test DELETE /api/v1/prestasi_siswa/:id", () => {
  const ID_PRESTASI_SISWA = "5";
  it("it should DELETE student reward", (done) => {
    chai
      .request(server)
      .delete("/api/v1/prestasi_siswa?ID_PRESTASI_SISWA=" + ID_PRESTASI_SISWA)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//registrasi

describe("Test GET api/v1/registrasi/semua_registrasi", () => {
  it("it should GET student registration", (done) => {
    chai
      .request(server)
      .get("/api/v1/registrasi/semua_registrasi")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test GET api/v1/registrasi/:id", () => {
  const REGISTRASI_ID = 1;
  it("it should GET student registration By id", (done) => {
    chai
      .request(server)
      .get("/api/v1/registrasi?REGISTRASI_ID=" + REGISTRASI_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.REGISTRASI_ID));
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test POST api/v1/registrasi/", () => {
  const regist = {
    REGISTRASI_ID: "2",
    ID_SISWA: 2,
    ID_PENDAFTARAN: 1,
    TANGGAL_MASUK: "2020-08-06",
  };
  it("it should POST student registration", (done) => {
    chai
      .request(server)
      .post("/api/v1/registrasi/")
      .send(regist)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test PUT api/v1/registrasi/:id", () => {
  const regist = {
    REGISTRASI_ID: "2",
    ID_SISWA: 2,
    ID_PENDAFTARAN: 1,
    TANGGAL_MASUK: "2019-08-06",
  };
  it("it should PUTT student registration", (done) => {
    chai
      .request(server)
      .put("/api/v1/registrasi?REGISTRASI_ID=" + regist.REGISTRASI_ID)
      .send(regist)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test DELETE api/v1/registrasi/:id", () => {
  const REGISTRASI_ID = "2";
  it("it should DELETE student registration", (done) => {
    chai
      .request(server)
      .delete("/api/v1/registrasi?REGISTRASI_ID=" + REGISTRASI_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//tempat tinggal

describe("Test GET /api/v1/tempat_tinggal/semua_tempat", () => {
  it("it should GET student's Home", (done) => {
    chai
      .request(server)
      .get("/api/v1/tempat_tinggal/semua_tempat")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(6);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test GET /api/v1/tempat_tinggal/:id", () => {
  const ID_TINGGAL = 1;
  it("it should GET student's Home By id", (done) => {
    chai
      .request(server)
      .get("/api/v1/tempat_tinggal?ID_TINGGAL=" + ID_TINGGAL)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.have.a("object");
        expect(response.body.result.some((item) => item.ID_TINGGAL));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test POST /api/v1/tempat_tinggal/", () => {
  const tinggal = {
    ID_TINGGAL: 11,
    TEMPAT_TINGGAL: "Lainnya",
  };
  it("it should POST student's Home", (done) => {
    chai
      .request(server)
      .post("/api/v1/tempat_tinggal/")
      .send(tinggal)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test PUT /api/v1/tempat_tinggal/:id", () => {
  const tinggal = {
    ID_TINGGAL: 11,
    TEMPAT_TINGGAL: "Lainnyaa",
  };
  it("it should PUT student's Home", (done) => {
    chai
      .request(server)
      .put("/api/v1/tempat_tinggal?ID_TINGGAL=" + tinggal.ID_TINGGAL)
      .send(tinggal)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test delete /api/v1/tempat_tinggal/:id", () => {
  const ID_TINGGAL = 11;
  it("it should delete student's Home", (done) => {
    chai
      .request(server)
      .delete("/api/v1/tempat_tinggal?ID_TINGGAL=" + ID_TINGGAL)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//tingkat prestasi

describe("Test GET api/v1/tingkat_prestasi/semua_tingkat", () => {
  it("it should GET reward", (done) => {
    chai
      .request(server)
      .get("/api/v1/tingkat_prestasi/semua_tingkat")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(6);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test GET api/v1/tingkat_prestasi/:id", () => {
  const ID_TINGKAT = 1;
  it("it should GET reward by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/tingkat_prestasi?ID_TINGKAT=" + ID_TINGKAT)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_TINGKAT));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test POST api/v1/tingkat_prestasi/", () => {
  const tingkat_prestasi = {
    ID_TINGKAT: 7,
    TINGKAT_PRESTASI: "Kampung",
  };
  it("it should POST reward", (done) => {
    chai
      .request(server)
      .post("/api/v1/tingkat_prestasi/")
      .send(tingkat_prestasi)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test PUT api/v1/tingkat_prestasi/:id", () => {
  const tingkat_prestasi = {
    ID_TINGKAT: 7,
    TINGKAT_PRESTASI: "Kampung",
  };
  it("it should PUT reward", (done) => {
    chai
      .request(server)
      .put("/api/v1/tingkat_prestasi?ID_TINGKAT=" + tingkat_prestasi.ID_TINGKAT)
      .send(tingkat_prestasi)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test DELETE api/v1/tingkat_prestasi/", () => {
  const ID_TINGKAT = 7;
  it("it should DELETE reward", (done) => {
    chai
      .request(server)
      .delete("/api/v1/tingkat_prestasi?ID_TINGKAT=" + ID_TINGKAT)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//transportasi

describe("Test GET /api/v1/transport/semua_transport", () => {
  it("it should GET all transport", (done) => {
    chai
      .request(server)
      .get("/api/v1/transport/semua_transport")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        expect(response.body.result).to.have.lengthOf(9);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test GET /api/v1/transport/:id", () => {
  const ID_TRANSPORTASI = 1;
  it("it should GET all transport by id", (done) => {
    chai
      .request(server)
      .get("/api/v1/transport?ID_TRANSPORTASI=" + ID_TRANSPORTASI)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.ID_TRANSPORTASI));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test POST /api/v1/transport/", () => {
  const transport = {
    ID_TRANSPORTASI: 107,
    JENIS: "LAINNYA",
  };
  it("it should POST  transport", (done) => {
    chai
      .request(server)
      .post("/api/v1/transport/")
      .send(transport)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test PUT /api/v1/transport/:id", () => {
  const transport = {
    ID_TRANSPORTASI: 105,
    JENIS: "LAIN-LAIN",
  };
  it("it should PUT  transport", (done) => {
    chai
      .request(server)
      .put("/api/v1/transport?ID_TRANSPORTASI=" + transport.ID_TRANSPORTASI)
      .send(transport)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/transport/:id", () => {
  const ID_TRANSPORTASI = 107;
  it("it should delete transport", (done) => {
    chai
      .request(server)
      .delete("/api/v1/transport?ID_TRANSPORTASI=" + ID_TRANSPORTASI)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

//beasiswa

describe("Test API GET /api/v1/beasiswa/semua_beasiswa_siswa", () => {
  it("it should GET Scholarship for students", (done) => {
    chai
      .request(server)
      .get("/api/v1/beasiswa/semua_beasiswa_siswa")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body.result).to.have.an("array");
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API GET /api/v1/beasiswa/:id", () => {
  const BEASISWA_ID = "D006";
  it("it should GET Scholarship for  By Id", (done) => {
    chai
      .request(server)
      .get("/api/v1/beasiswa?BEASISWA_ID=" + BEASISWA_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.result.some((item) => item.BEASISWA_ID));
        expect(response.body.result).to.have.lengthOf(1);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /api/v1/beasiswa/", () => {
  const beasiswa = {
    BEASISWA_ID: "10",
    ID_SISWA: 1,
    ID_JENIS_BEASISWA: 1,
    KETERANGAN: "KAKAS",
    TAHUN_MULAI: 2014,
    TAHUN_SELESAI: 2020,
  };
  it("it should POST Scholarship for students", (done) => {
    chai
      .request(server)
      .post("/api/v1/beasiswa/")
      .send(beasiswa)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API PUT /api/v1/beasiswa/", () => {
  const beasiswa = {
    BEASISWA_ID: "10",
    ID_SISWA: 1,
    ID_JENIS_BEASISWA: 1,
    KETERANGAN: "PARAGON",
    TAHUN_MULAI: 2014,
    TAHUN_SELESAI: 2020,
  };
  it("it should PUT Scholarship for students", (done) => {
    chai
      .request(server)
      .put("/api/v1/beasiswa?BEASISWA_ID=" + beasiswa.BEASISWA_ID)
      .send(beasiswa)
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect("Content-Type", /json/);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API DELETE /api/v1/beasiswa/", () => {
  const BEASISWA_ID = "10";
  it("it should delete Scholarship for students", (done) => {
    chai
      .request(server)
      .delete("/api/v1/beasiswa?BEASISWA_ID=" + BEASISWA_ID)
      .end((err, response) => {
        expect(response).to.have.status(200);
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe("Test API POST /upload", () => {
  it("it should post upload", (done) => {
    chai
      .request(server)
      .post("/upload")
      .attach("file", "pict/tut_wuri.png")
      .end((err, response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.an("object");
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});
