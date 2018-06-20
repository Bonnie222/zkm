require('libs/plugins/jquery.smoove');
require('program.less');
var controller = function() {
    var data = {};

    // 为什么选择小程序
    data.cause = {
      title: '为什么选择小程序',
      list: [{
        pic: __uri('images/program/cause (6).png'),
        title: '自带流量',
        desc: '微信超9亿的活跃用户，附近小程序，自由分享等特点，轻松获取新会员',
      }, {
        pic: __uri('images/program/cause (5).png'),
        title: '零门槛打通小程序',
        desc: '在招客猫注册，即可享受小程序带来的新体验',
      }, {
        pic: __uri('images/program/cause (4).png'),
        title: '多种营销活动',
        desc: '招客猫为您准备各种有趣的营销方式，优惠券，砸金蛋，大转盘，任您选择',
      }, {
        pic: __uri('images/program/cause (2).png'),
        title: '店铺私人定制',
        desc: '小程序支持店铺自主选择格式风格，搭配您喜欢',
      }, {
        pic: __uri('images/program/cause (1).png'),
        title: '推广无压力',
        desc: '小程序用完即走，自由分享，快速传播',
      }, {
        pic: __uri('images/program/cause (3).png'),
        title: '订单同步',
        desc: '小程序的订单与线上门店线下实体店连接，降低运营成本，提高管理效率',
      }]
    }

    // 运用场景
    data.scene = {
      title: '小程序丰富的运用场景',
      list: [{
        pic:__uri('images/program/scene (1).png'),
        title: '外卖配送'
      }, {
        pic:__uri('images/program/scene (2).png'),
        title: '营销活动'
      }, {
        pic:__uri('images/program/scene (3).png'),
        title: '在线预约'
      }, {
        pic:__uri('images/program/scene (4).png'),
        title: '客户引流'
      }, {
        pic:__uri('images/program/scene (5).png'),
        title: '网上开店'
      }]
    }
    appView.html(_.template(__inline('program.html'), data));
    $('#bottom-footer').html(_.template(__inline('templates/footer/footer2.html')));

    sellHover();
    $('.special').smoove();  // 页面内容随滚动条变化动态

    // 营销工具 鼠标滑过
    function sellHover(){
    	$(".con4-wrap-content li").mouseenter(
    		function(){
          $(".con4-wrap-content li").removeClass("active");
          $(this).addClass("active");
    		});
    }

};

module.exports = controller;
