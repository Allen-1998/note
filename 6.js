{
  // 建造者模式
  const Human = function (param = {}) {
    this.skill = param.skill || "保密";
    this.age = param.age || "保密";
  };
  Human.prototype = {
    getSkill: function () {
      return this.skill;
    },
    getAge: function () {
      return this.age;
    },
  };
  const Named = function (name) {
    const that = this;
    (function (name, that) {
      that.wholeName = name;
      if (name.indexOf(" ") > -1) {
        that.firstName = name.split(" ")[0];
        that.lastName = name.split(" ")[1];
      }
    })(name, that);
  };

  const Person = function (name) {
    const person = new Human();
    person.name = new Named(name);
    return person;
  };

  const person = new Person("Allen ttk");
  console.log(person.name.wholeName); // Allen ttk
  console.log(person.name.firstName); // Allen
  console.log(person.name.lastName); // ttk
  console.log(person.getSkill()); // 保密
  console.log(person.getAge()); // 保密
}
