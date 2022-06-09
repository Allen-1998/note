{
  const checkObject = function () {};
  checkObject.prototype = {
    checkName: function () {},
    checkEmail: function () {},
    checkPassword: function () {},
  };

  const checkTest = new checkObject();
  checkTest.checkName();
  checkTest.checkEmail();
  checkTest.checkPassword();
}
// 链式调用
{
  const checkObject = function () {};
  checkObject.prototype = {
    checkName: function () {
      return this;
    },
    checkEmail: function () {
      return this;
    },
    checkPassword: function () {
      return this;
    },
  };

  const checkTest = new checkObject();
  checkTest.checkName().checkEmail().checkPassword();
}
