{
  // 抽象工厂模式
  const VehicleFactory = function (subType, superType) {
    if (typeof VehicleFactory[superType] === "function") {
      const F = function () {};
      F.prototype = new VehicleFactory[superType]();
      subType.prototype = new F();
    } else {
      throw new Error("error");
    }
  };
  VehicleFactory.Car = function () {
    this.type = "car";
  };
  VehicleFactory.Car.prototype = {
    getPrice: function () {
      return new Error("子类必须实现该方法");
    },
    getSpeed: function () {
      return new Error("子类必须实现该方法");
    },
  };
  VehicleFactory.Bike = function () {
    this.type = "bike";
  };
  VehicleFactory.Bike.prototype = {
    getPrice: function () {
      return new Error("子类必须实现该方法");
    },
    getSpeed: function () {
      return new Error("子类必须实现该方法");
    },
  };

  const v1 = new VehicleFactory.Car();
  const v2 = new VehicleFactory.Bike();
  console.log(v1.type); // car
  console.log(v2.type); // bike
  v1.getPrice(); // error

  const BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
  };
  VehicleFactory(BMW, "Car");
  BMW.prototype.getPrice = function () {
    return this.price;
  };
  const bmw = new BMW(100, "100km/h");
  console.log(bmw.type); // car
  console.log(bmw.getPrice()); // 100
  console.log(bmw.getSpeed()); // error: 子类必须实现该方法
}
