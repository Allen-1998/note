{
  // 安全模式工厂
  const JobFactory = function (type, content) {
    if (this instanceof JobFactory) {
      return new this[type](content);
    }
    return new JobFactory(type, content);
  };
  JobFactory.prototype = {
    Java: function (content) {
      this.content = content;
    },
    Php: function (content) {
      this.content = content;
    },
  };
  const job1 = JobFactory("Java", "java");
  console.log(job1.content); // java
  const job2 = new JobFactory("Php", "php");
  console.log(job2.content); // php
}
