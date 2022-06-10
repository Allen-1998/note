{
  // 篮球基类
  const Basketball = function () {
    this.intro = "篮球盛行于美国";
  };
  Basketball.prototype = {
    getMember: function () {
      console.log("篮球队伍有两名球员");
    },
    getBallSize: function () {
      console.log("篮球的尺寸是22米");
    },
  };
  // 足球基类
  const Football = function () {
    this.intro = "足球盛行于英国";
  };
  Football.prototype = {
    getMember: function () {
      console.log("足球队伍有两名球员");
    },
    getBallSize: function () {
      console.log("足球的尺寸是22米");
    },
  };
  // 运动工厂
  const SportFactory = function (name) {
    if (name === "basketball") {
      return new Basketball();
    } else if (name === "football") {
      return new Football();
    }
  };

  const sport1 = SportFactory("basketball");
  console.log(sport1.intro); // 篮球盛行于美国
  sport1.getMember(); // 篮球队伍有两名球员
}
