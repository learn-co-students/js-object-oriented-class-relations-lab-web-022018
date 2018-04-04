let driverid = 0
let passengerid = 0
let tripid = 0

let store = {drivers:[], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = driverid++
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {return this.id === trip.driverId})
  }
  passengers() {
    let trips = this.trips()
    let passengers = []
    for (let i = 0; i<trips.length; i++) {
      passengers.push(store.passengers.filter(passenger => {return trips[i].passengerId === passenger.id })[0])
    }
    return passengers
  }
}

class Passenger {
  constructor(name) {
    this.name = name
    this.id = passengerid++
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip => {return this.id === trip.passengerId})
  }

  drivers() {
    let trips = this.trips()
    let drivers = []
    for (let i = 0; i<trips.length; i++) {
      drivers.push(store.drivers.filter(driver => {return trips[i].driverId === driver.id })[0])
    }
    return drivers
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = tripid++
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }
  driver() {
    return store.drivers.find(driver => {return driver.id === this.driverId})
  }

  passenger() {
    return store.passengers.find(passenger => {return passenger.id === this.passengerId})
  }
}
