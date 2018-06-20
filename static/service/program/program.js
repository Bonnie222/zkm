define('modules/service/program/program', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/service/program/program.css*/;
  var controller = function() {
      var data = {};
  
      // 为什么选择小程序
      data.cause = {
        title: '为什么选择小程序',
        list: [{
          pic: '/images/program/cause (6).png',
          title: '自带流量',
          desc: '微信超9亿的活跃用户，附近小程序，自由分享等特点，轻松获取新会员',
        }, {
          pic: '/images/program/cause (5).png',
          title: '零门槛打通小程序',
          desc: '在招客猫注册，即可享受小程序带来的新体验',
        }, {
          pic: '/images/program/cause (4).png',
          title: '多种营销活动',
          desc: '招客猫为您准备各种有趣的营销方式，优惠券，砸金蛋，大转盘，任您选择',
        }, {
          pic: '/images/program/cause (2).png',
          title: '店铺私人定制',
          desc: '小程序支持店铺自主选择格式风格，搭配您喜欢',
        }, {
          pic: '/images/program/cause (1).png',
          title: '推广无压力',
          desc: '小程序用完即走，自由分享，快速传播',
        }, {
          pic: '/images/program/cause (3).png',
          title: '订单同步',
          desc: '小程序的订单与线上门店线下实体店连接，降低运营成本，提高管理效率',
        }]
      }
  
      // 运用场景
      data.scene = {
        title: '小程序丰富的运用场景',
        list: [{
          pic:'/images/program/scene (1).png',
          title: '外卖配送'
        }, {
          pic:'/images/program/scene (2).png',
          title: '营销活动'
        }, {
          pic:'/images/program/scene (3).png',
          title: '在线预约'
        }, {
          pic:'/images/program/scene (4).png',
          title: '客户引流'
        }, {
          pic:'/images/program/scene (5).png',
          title: '网上开店'
        }]
      }
      appView.html(_.template("<div id=\"service-program\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>招客猫，小程序</p>\r\n          <p>零门槛适用小程序</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con2-wrap bgGray\">\r\n    <div class=\"main-content special\">\r\n      <p class=\"commonTitle\"><%= cause.title %></p>\r\n      <div class=\"flex\">\r\n        <% _.each(cause.list, function(item){ %>\r\n        <div class=\"con2-item\">\r\n          <img src=\"<%= item.pic %>\"/>\r\n          <div class=\"con2-item-desc\">\r\n            <p class=\"title\"><%= item.title %></p>\r\n            <p class=\"desc\"><%= item.desc %></p>\r\n          </div>\r\n        </div>\r\n        <% }) %>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap\">\r\n    <p class=\"commonTitle\"><%= scene.title %></p>\r\n    <div class=\"con3-wrap-content\">\r\n      <ul class=\"con3-wrap-ul\">\r\n        <% _.each(scene.list, function(item, index) {%>\r\n          <% if(index%2==0){ %>\r\n        <li class=\"special\" data-move-y=\"-300px\">\r\n          <% } else{ %>\r\n        <li class=\"special\" data-move-y=\"300px\">\r\n          <% } %>\r\n          <div class=\"normal-inner\">\r\n            <img src=\"<%= item.pic %>\"/>\r\n            <div class=\"lineheight\"></div>\r\n          </div>\r\n          <p class=\"title\"><%= item.title %></p>\r\n        </li>\r\n        <% }) %>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n", data));
      $('#bottom-footer').html(_.template("<div class=\"footer2\">\r\n  <div class=\"footer-wrap second-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <img src=\"/images/zkm-logo2.png\" class=\"zkm-logo\"/>\r\n        <span class=\"inner-title\">招客猫</span>\r\n        版权所有©2018  网站备案/许可证号：\r\n       <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"));
  
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
  

});
