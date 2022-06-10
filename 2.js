{
  const Book = function (id, name, price) {
    // 私有属性
    var num = 1;
    // 私有方法
    function checkId() {}

    // 特权方法
    this.getName = function () {
      return this.name;
    };
    this.getPrice = function () {
      return this.price;
    };
    this.setName = function (name) {
      this.name = name;
    };
    this.setPrice = function (price) {
      this.price = price;
    };

    // 公有属性
    this.id = id;
    // 公有方法
    this.copy = function () {};
    // 构造器
    this.setName(name);
    this.setPrice(price);
  };

  const book1 = new Book(1, "book1", 100);
  console.log(book1.num); // undefined
  console.log(book1.id); // 1
  console.log(book1.getName()); // book1
  book1.setName("book11");
  console.log(book1.getName()); // book11

  const book2 = new Book(2, "book2", 200);
  console.log(book2.id);
  console.log(book2.getName()); // book2
  book2.setName("book22");
  console.log(book2.getName()); // book22
}
// 安全模式
{
  const Book = function (id, name, price) {
    if (this instanceof Book) {
      this.id = id;
      this.name = name;
      this.price = price;
    } else {
      return new Book(id, name, price);
    }
  };
  const book1 = new Book(1, "book1", 100);
  const book2 = Book(2, "book2", 200);
}
// 类式继承
{
  function SuperClass() {
    this.superValue = true;
  }
  SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
  };
  function SubClass() {
    this.subValue = false;
  }
  SubClass.prototype = new SuperClass();
  SubClass.prototype.getSubValue = function () {
    return this.subValue;
  };
  const sub1 = new SubClass();
  console.log(sub1.getSuperValue()); // true
  console.log(sub1.getSubValue()); // false

  console.log(sub1 instanceof SuperClass); // true
  console.log(sub1 instanceof SubClass); // true
  console.log(SubClass instanceof SuperClass); // false
  console.log(SubClass.prototype instanceof SuperClass); // true
  console.log(SubClass.prototype instanceof Object); // true

  // 实例之间会互相污染
  const sub2 = new SubClass();
  console.log(sub2.getSuperValue()); // true
  sub1.subValue = false;
  console.log(sub1.getSubValue()); // false
  console.log(sub2.getSubValue()); // false
}
//构造函数继承
{
  function SuperClass(id) {
    this.id = id;
    this.name = "";
  }
  SuperClass.prototype.showName = function () {
    console.log(this.name);
  };
  function SubClass(id, name) {
    SuperClass.call(this, id);
    this.name = name;
  }
  const sub1 = new SubClass(1, "sub1");
  console.log(sub1.id); // 1
  console.log(sub1.name); // sub1
  const sub2 = new SubClass(2, "sub2");
  console.log(sub2.id); // 2
  console.log(sub2.name); // sub2
  //   sub1.showName(); // error: sub1.showName is not a function
}
// 组合继承
{
  function SuperClass(id) {
    this.id = id;
    this.name = "";
  }
  SuperClass.prototype.showName = function () {
    console.log(this.name); // sub1, sub2
  };
  function SubClass(id, name) {
    SuperClass.call(this, id);
    this.name = name;
  }
  SubClass.prototype = new SuperClass();

  const sub1 = new SubClass(1, "sub1");
  console.log(sub1.id); // 1
  console.log(sub1.name); // sub1
  const sub2 = new SubClass(2, "sub2");
  console.log(sub2.id); // 2
  console.log(sub2.name); // sub2
  sub1.showName(); // sub1
  sub2.showName(); // sub2
}
// 原型式继承
{
  function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }
  // 寄生式继承
  const book = {
    name: "book",
    price: 100,
  };
  function createBook(obj) {
    const o = inheritObject(obj);
    o.getName = function () {
      return this.name;
    };
    return o;
  }
  const book1 = createBook(book);
  console.log(book1.getName()); // book

  // 寄生组合式继承
  function inheritPrototype(subClass, superClass) {
    const p = inheritObject(superClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
  }

  function SuperClass(id) {
    this.id = id;
    this.name = "";
  }

  SuperClass.prototype.showName = function () {
    console.log(this.name); // sub1, sub2
  };
  function SubClass(id, name) {
    SuperClass.call(this, id);
    this.name = name;
  }
  inheritPrototype(SubClass, SuperClass);

  const sub1 = new SubClass(1, "sub1");
  console.log(sub1.id); // 1
  console.log(sub1.name); // sub1
  const sub2 = new SubClass(2, "sub2");
  console.log(sub2.id); // 2
  console.log(sub2.name); // sub2
  sub1.showName(); // sub1
  sub2.showName(); // sub2
}
