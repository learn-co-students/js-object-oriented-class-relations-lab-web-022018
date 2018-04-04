let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter((trip)=>{return trip.driver() === this}) // may need [0] after driver()
  }

  passengers(){
    return store.passengers.filter( (passenger) => {
      return passenger.trips().filter( (trip) => {
        return trip.driverId === this.id
      }).length > 0
    })
  }
}

let passengerId = 0;
class Passenger {
  constructor(name){
     this.name = name
     this.id = ++passengerId
     store.passengers.push(this)
  }
  trips(){
    return store.trips.filter((trip)=>{return trip.passenger() === this}) // may need [0] after driver()
  }

  drivers(){
    return store.drivers.filter((driver)=>{return driver.passengers().includes(this)})
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }
  driver() {
    return store.drivers.filter((driver)=>{return driver.id === this.driverId})[0]
  }

  passenger() {
    return store.passengers.filter((passenger)=>{return passenger.id === this.passengerId})[0]
  }
}
