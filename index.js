let store = {drivers: [], trips:[], passengers:[]}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {

  constructor (name) {
    this.name = name;
    this.id = ++ driverId;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter((trip)=>(trip.driverId === this.id))
  }

  passengers(){
    return store.passengers.filter((passenger)=>{
        return this.trips().find((trip) =>(trip.passengerId=== passenger.id))
    })
  }

}

class Passenger {

  constructor (name) {
    this.name = name;
    this.id = ++ passengerId;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter((trip)=>(trip.passengerId === this.id))
  }

  drivers(){
    return store.drivers.filter((driver)=>{
      for (let i=0; i < this.trips().length; i++){
        return this.trips()[i].driverId === driver.id
      }
    })
  }

}

class Trip {

  constructor (driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++ tripId;
    store.trips.push(this);
  }

  passenger(){
    return store.passengers.find(function (passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find( function (driver) {return driver.id === this.driverId}.bind(this))
  }
}
