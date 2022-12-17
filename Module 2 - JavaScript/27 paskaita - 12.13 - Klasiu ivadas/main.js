let asmenysBeKlasiu = [
  {
    vardas: "Giedrius",
    amzius: 37,
    turiVaiku: false
  }
];

// KLASIU KURIMAS

class pavadinimas {
  constructor(par1, par2) {
    this.par1 = par1;
    this.par2 = par2;
  }

}

// Uzduotis

class Ledai {
  constructor(pavadinimas, skonis, kaina) {
    this.pavadinimas = pavadinimas;
    this.skonis = skonis;
    this.kaina = kaina;
  }
  kainosKeitimas(keitimasProcentais) {
    return this.kaina + this.kaina * keitimasProcentais / 100;
  }
}

const leduMasyvas = [
  new Ledai("Dadu", "karamelinis", 1.2),
  new Ledai("Tirpuko", "avietinis", 0.49),
  new Ledai("Nykštukas", "vanilinis", 1.5),
];

leduMasyvas;