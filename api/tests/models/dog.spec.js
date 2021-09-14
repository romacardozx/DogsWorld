const { Breed, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe("Dogs model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se pudo conectar a la base de datos", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Breed.sync({ force: true }));

    describe("Name", () => {
      it("arroja un error si name es null", (done) => {
        Breed.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("Funciona si el name es valido", () => {
        Breed.create({ name: "Diego" })
      });
    });
  });

  describe("dogestadisticas", () => {
    it("height debe ser un numero", (done) => {
      Breed.create({ name: "Diego", height: "xxx" })
        .then(() => done(new Error("height no es un numero")))
        .catch(() => done());
    });

    it("weight debe ser un numero", (done) => {
      Breed.create({ name: "Diego", weight: "xxx" })
        .then(() => done(new Error("weight no es un numero")))
        .catch(() => done());
    });

    it("Funciona si no se pasa un valor algun valor", () => {
      Breed.create({ name: "Diego" });
      Breed.create({ name: "Diego", height: 100});
      Breed.create({ name: "Diego", weight: 100});
    });

  });
});