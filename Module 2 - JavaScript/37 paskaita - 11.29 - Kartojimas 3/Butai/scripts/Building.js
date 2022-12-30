export default class Building {
  #numberOfFloors;
  #numberOfEntrances;
  #numberOfApartments;
  constructor(numberOfFloors, numberOfEntrances, numberOfApartments) {
    [this.#numberOfFloors, this.#numberOfEntrances, this.#numberOfApartments] = [
      numberOfFloors, numberOfEntrances, numberOfApartments];
  }
  getNumberOfFloors() {
    return this.#numberOfFloors;
  }
  getNumberOfEntrances() {
    return this.#numberOfEntrances;
  }
  getNumberOfApartments() {
    return this.#numberOfApartments;
  }
  apartmentsPerEntrance() {
    return this.#numberOfApartments / this.#numberOfEntrances;
  }
  apartmentsPerFloor() {
    return this.#numberOfApartments / this.#numberOfEntrances / this.#numberOfFloors;
  }
  apartmentFloor(apartmentNumber) {

    const apartmentsPerEntrance = this.apartmentsPerEntrance();
    const apartmentsPerFloor = this.apartmentsPerFloor();
    const entrance = Math.ceil(apartmentNumber / apartmentsPerEntrance);
    const floor = Math.ceil(
      (apartmentNumber - (entrance - 1) * apartmentsPerEntrance) / apartmentsPerFloor
    );
    return floor;
  }
  apartmentFinder(kambariuSkaicius, aukstoNumerisNuo, aukstoNumerisIki, kainaIki) {
    fetch('./data/data.json')
      .then(resp => resp.json())
      .then(data => {
        const search = data.butai
          .filter(butas =>
            (kambariuSkaicius ? butas.kambariuSkaicius === kambariuSkaicius : true)
            && (aukstoNumerisNuo ? this.apartmentFloor(butas.butoNumeris) >= aukstoNumerisNuo : true)
            && (aukstoNumerisIki ? this.apartmentFloor(butas.butoNumeris) <= aukstoNumerisIki : true)
            && (kainaIki ? butas.pardavimoKaina <= kainaIki : true)
          );
        search.forEach(butas => console.log(`Buto numeris: ${butas.butoNumeris} | Plotas: ${butas.bendrasPlotas}kvm | Kambariai: ${butas.kambariuSkaicius} | Kaina: ${butas.pardavimoKaina}EUR | Telefono numeris: ${butas.telefonoNumeris}`));
      });
  }
}