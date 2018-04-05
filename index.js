let store = {drivers: [], trips: [], passengers: []}
// let store = {drivers: [], passengers: [], trips: [] };

// Driver class:
//
// A driver has many trips, and has many passengers through trips.
// new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a driver has taken
// passengers() - returns all of the passengers that a driver has taken on a trip
let driverId = 0;
let passengerId = 0;
let tripId = 0;
class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this)
  }//constructor
  trips(){
    // return store.trips.filter(trip => {
    return store.trips.filter((trip)=>{
      return trip.driverId == this.id;
      // return trip.driverId == this.id
    })//end filter
  }//Driver.trips
  // passengers(){
  //   // passenger_array=[];
  //   // this.trips().forEach((trip)=>{console.log(trip.passengerId)} ) //get id 26,27
  //   // this.trips().forEach((trip)=>{passenger_array.push(trip.passengerId)} ) //get id 26,27
  //   // return this.trips().forEach((tripId)=>{
  //   //   if (store.trip[tripId]driverId==this.id )
  //   //   {return trip.passengerId} } ) //get id 26,27
  //   // return passenger_array
  // }//Driver.passengers
  passengers() {
  return this.trips().map(trip => {
    return trip.passenger();
  });
}

}//end class
// Passenger class:
//
// A passenger has many trips, and has many drivers through trips.
// new Passenger() - initialized with a name; returns a JavaScript object that has attributes of id, and name
// trips() - returns all of the trips that a passenger has taken
// drivers() - returns all of the drivers that has taken a passenger on a trip
class Passenger {
  constructor(name){
    this.name=name
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter( trip => { return trip.passengerId == this.id})
  }//Passenger.trips()
  drivers(){
    return this.trips().map(trip => {return store.drivers.find( driver => {return trip.driverId == driver.id }  ) } )
    // return this.trips().map(trip => {return trip.driverId} ) //expected [ 18 ] to include { id: 18, name: 'Alfie'
  }
}//end class

// Trip class:
//
// A trip belongs to a driver and belongs to a passenger.
// new Trip() - initialized with an instance of driver and an instance of passenger;
  // returns a JavaScript that has attributes id, driverId, and passengerId
// driver() - returns the driver associated with the trip
// passenger() - returns the passenger associated with the trip


class Trip {
  constructor(driver,passenger){
    this.passengerId = passenger.id;
    this.driverId = driver.id;
    this.id = ++tripId;
    store.trips.push(this);
  }//constructor
  passenger(){ //returns the passenger associated with the trip
    return store.passengers.find((passenger)=>{
      return passenger.id === this.passengerId
    });//find
  }//Trip.passenger
  //???????????????????????????????????????????????????????????????????????????
  // driver(){
  //   return store.drivers.find((driver)=>{
  //     return driver.id === this.driverID;
  //   });//find
  // }//Trip.driver
  //???????????????????????????????????????????????????????????????????????????
  driver(){         //WHY THIS WORK BUT ABOVE DOES NOT??????????????????? //SOLUTIONS -LITERALLY SAME AS MY FUNCTION
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }//END DRIVER
  //???????????????????????????????????????????????????????????????????????????

} //class trip

  // driver(){
  //   // console.log("Trip:driver() wascalled:driverID is:" +this.driverId);
  //   return store.drivers.find(  driver=>//function(driver){
  //   // // x= store.drivers.find( function(driver){
  //   // return store.drivers.find.call( function(driver){
  //   //   console.log("hi");
  //   //   // console.log(this.driverId )
  //   //   // console.log(driver.id )
  //   //   // debugger;
  //   //
  //     return this.driverId == driver.id
  //   //         })//find
  //   // console.log("x" + x)
  //   // // user(){
  //   // //     return store.users.find(function(user){
  //   // //       return user.id === this.userId
  //       // })
  //   // //     }
  // )
//   }
//
//   findDriver(){return console.log(this)}
//   passenger(){}//passenger
// }//class




let driver = new Driver("Alfie")
let passenger = new Passenger("Bob")
let firstTrip = new Trip(driver, passenger)
let secondPassenger = new Passenger("Susan")
let secondTrip = new Trip(driver, secondPassenger)
console.log(`${store.drivers[0].name}`)
// console.log(store)
