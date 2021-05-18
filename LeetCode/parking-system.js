
 
var ParkingSystem = function(big, medium, small) {
  this.big = big
  this.medium = medium
  this.small = small
};

ParkingSystem.prototype.addCar = function(carType) {
  const obj = {
    1: "big",
    2: "medium",
    3: "small"
  }
  
  if (this[obj[carType]] > 0) {
    this[obj[carType]]--
    return true
  } else {
    return false
  }
    
};

var parking = new ParkingSystem(1,1,1)
console.log(parking)
console.log(parking.addCar(1))
console.log(parking.addCar(1))
console.log(parking.addCar(3))
console.log(parking.addCar(2))
console.log(parking.addCar(2))
console.log(parking.addCar(1))
console.log(parking.addCar(3))

// 1 - большой, 2 - средний, 3 - маленький

/** 
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/


