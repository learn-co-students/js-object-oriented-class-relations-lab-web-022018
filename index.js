let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name
    this.id = store.drivers.length +1
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip =>  trip.driverId === this.id)
  }

  passengers() {
    return store.trips.map(trip => trip.passenger())
  }

}


class Passenger{
  constructor(name) {
    this.name = name
    this.id = store.passengers.length+1
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers() {
    return store.trips.map(trip => trip.driver())
  }
}

class Trip{
  constructor(driver, passenger) {
    this.id = store.trips.length+1
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }



  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }

}
