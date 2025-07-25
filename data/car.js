class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = true;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
    this.speed = carDetails.speed;
    this.isTrunkOpen =carDetails.isTrunkOpen;
  }  
  //displayInfo() is a method
  displayinfo() {
    console.log(
      `${this.#brand} ${this.#model}, ${this.speed} km/h, ${this.isTrunkOpen}`
    )
  }

  go() {
    if(this.isTrunkOpen === true) {
      return
    }
    this.speed += 5
    if(this.speed > 200) {
    this.speed = 200
   }
  }

  brake() {
    this.speed -= 5
    if(this.speed < 0) {
    this.speed = 0
   }
  }

  openTrunk() {
    if(this.speed = 0 ) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false
  }
  
  
}


class RaceCar extends Car{
  acceleration =0;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration
  }
  go() {
  
    this.acceleration += 10
    if(this.speed > 300) {
      this.speed = 300;
    }
  }
  openTrunk() {
    return false
  }
  closeTrunkTrunk() {
    return false
  }
  displayinfo() {
    console.log(`${this.brand} ${this.model}, ${this.acceleration}`);
  }
}



const car1 = new Car ({
  brand: 'Toyota',
  model: 'Corolla',
  speed: 10,
  isTrunkOpen: true
 })
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3',
  speed: 40,
  isTrunkOpen: false
 })
/*
car1.displayinfo()
car2.displayinfo()

car1.go()
car1.go()
car1.go()
car1.go()
car1.brake()


car2.brake()
car2.brake()
car2.go()
car2.openTrunk()


car1.displayinfo()
car2.displayinfo() */

const raceCar1 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
})

raceCar1.openTrunk()
raceCar1.go()
raceCar1.go()
raceCar1.brake();

raceCar1.displayinfo()