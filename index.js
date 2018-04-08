
let store = {drivers:[], passengers:[], trips:[]}

let driverId = 0
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }  
  
  trips(){
    return store.trips.filter((trip)=>{
      return trip.driverId === this.id
    })
  }
  
  passengers(){
   return this.trips().map(trip => {
      return trip.passenger();
    });
  
  }
}

let passengerId = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
  
  trips(){
    return store.trips.filter(trip => {
      return this.id === trip.passengerId
    })
  }
  
  drivers(){
    return this.trips().map(trip =>{
      return trip.driver()
    })
  }
}

let tripId = 0
class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passengerId
    // this.driver = driver
    //this.passenger = passenger
    store.trips.push(this)
  }
  
  driver(){
    return store.drivers.find((driver)=>{
      return driver.id === this.driverId
    })
  }
  
  passenger(){
    return store.passengers.find((passenger)=>{
      return passenger.id === this.passengerId
    })
  }
}


let newDriver = new Driver('firstdriver'),
    newPassenger = new Passenger('firstpassenger'),
    newTrip = new Trip(newDriver, newPassenger),
    secondDriver = new Driver('seconddriver'),
    secondPassenger = new Passenger('secondpassenger'),
    secondTrip = new Trip(secondDriver, secondPassenger);
    
    
    





