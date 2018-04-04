let store = {drivers: [], passengers: [], trips: []};
let driverID = 0;
let passengerID = 0;
let tripID = 0


class Driver {
  constructor(name, id) {
    this.id = ++driverID;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {return trip.driverId === this.id})
  }

  passengers() {
    let driverPassengers = []
    this.trips().forEach(trip => {driverPassengers.push(store.passengers.find(passenger => {return trip.passengerId === passenger.id}))})
    return driverPassengers;
  }
}

class Passenger {
  constructor(name, id) {
    this.name = name;
    this.id = ++passengerID;

    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(trip => {return trip.passengerId === this.id})
  }

  drivers() {
    let passengerDrivers = [];
    this.trips().forEach(trip => {passengerDrivers.push(store.drivers.find(driver => {return trip.driverId === driver.id}))})
    return passengerDrivers
  }
}

class Trip {
  constructor(driver, passenger, id) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripID

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => {return driver.id === this.driverId})
  }

  passenger() {
    return store.passengers.find(passenger => {return passenger.id === this.passengerId})
  }

}

driver = new Driver("Alfie")
    passenger = new Passenger("Bob")
    firstTrip = new Trip(driver, passenger)
    secondPassenger = new Passenger("Susan")
    secondTrip = new Trip(driver, secondPassenger)
