


let store = {drivers: [], passengers: [], trips: []};




let tripId = 0;

class Trip{
  constructor(driver, passenger){
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }


  driver(){
    return store.drivers.find(driver => driver.id === this.driverId);

  }


  passenger(){
    return store.passengers.find(passenger => passenger.id === this.passengerId);

  }

  }

  let driverId = 0;

    class Driver {
      constructor(name){
        this.name = name
        this.id = ++driverId
        store.drivers.push(this);
      }

        trips(){
          return store.trips.filter(trip => trip.driverId === this.id);

        }




      passengers(){

        return this.trips().map(trip => trip.passenger());
      }
      }





  let passengerId = 0;

  class Passenger {
    constructor(name){
      this.name = name
      this.id =  ++passengerId
      store.passengers.push(this)
    }


    trips(){
      return store.trips.filter(trip => trip.passengerId === this.id);

    }


    drivers(){
      return this.trips().map(trip => trip.driver());

    }
  }





// Driver` class:
//   + A driver has many trips, and has many passengers through trips.
//   + `new Driver()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
//   + `trips()` - returns all of the trips that a driver has taken
//   + `passengers()` - returns all of the passengers that a driver has taken on a trip
//
// `Passenger` class:
//   + A passenger has many trips, and has many drivers through trips.
//   + `new Passenger()` - initialized with a name; returns a JavaScript object that has attributes of `id`, and `name`
//   + `trips()` - returns all of the trips that a passenger has taken
//   + `drivers()` - returns all of the drivers that has taken a passenger on a trip
//
// `Trip` class:
//   + A trip belongs to a driver and belongs to a passenger.
//   + `new Trip()` - initialized with an instance of driver and an instance of passenger; returns a JavaScript that has attributes `id`, `driverId`, and `passengerId`
//   + `driver()` - returns the driver associated with the trip
//   + `passenger()` - returns the passenger associated with the trip
//
