define('modules/product/cashier/cashier', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/product/cashier/cashier.css*/;
  var controller = function() {
      var data = {};
  
      data.cause = {
        title: '为什么会选择我们',
        list: [{
          pic:'/images/cashier/cause(1).png',
          title: '银行卡收单',
          desc: 'pos收单，订单支付'
        }, {
          pic:'/images/cashier/cause(2).png',
          title: '基金支付',
          desc: '提供安全、方便、快捷的基金支付'
        }, {
          pic:'/images/cashier/cause(3).png',
          title: '预付卡支付',
          desc: '预付卡业务智慧城市业务'
        }, {
          pic:'/images/cashier/cause(4).png',
          title: '互联网支付',
          desc: '移动支付、跨境支付'
        }, {
          pic:'/images/cashier/cause(5).png',
          title: '金融服务',
          desc: '万证通服务、理财服务'
        }]
      }
  
      appView.html(_.template("<div id=\"product-cashier\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>钱的事，很重要</p>\r\n          <p>招客猫收银系统省心，安全，多样化</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con2-wrap bgGray\">\r\n    <p class=\"commonTitle\"><%= cause.title %></p>\r\n    <div class=\"con2-wrap-content\">\r\n      <ul class=\"con2-wrap-ul\">\r\n        <% _.each(cause.list, function(item, index) {%>\r\n          <% if(index%2==0){ %>\r\n        <li class=\"special\" data-move-y=\"-300px\">\r\n          <% } else{ %>\r\n        <li class=\"special\" data-move-y=\"300px\">\r\n          <% } %>\r\n          <div class=\"normal-inner\">\r\n            <img src=\"<%= item.pic %>\"/>\r\n            <div class=\"lineheight\"></div>\r\n          </div>\r\n          <p class=\"title\"><%= item.title %></p>\r\n          <p class=\"desc\"><%= item.desc %><p>\r\n        </li>\r\n        <% }) %>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap\">\r\n    <p class=\"commonTitle\"><span>安全便利的支付方式</span>\r\n      <img src=\"/images/cashier/way(1).png\" class=\"pull-right special\" data-move-x=\"200px\"/>\r\n    </p>\r\n    <div class=\"con3-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <p class=\"title\">银行级别的安全<p>\r\n        <p class=\"desc\">营销活动，库存管理和各个渠道的账目清算</p>\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <img src=\"/images/cashier/way(2).png\" />\r\n      </span>\r\n    </div>\r\n    <div class=\"con3-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <img src=\"/images/cashier/way(3).png\" />\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <p class=\"title\">随时随地的便利<p>\r\n        <p class=\"desc\">招客猫收银系统联合通联宝支付，随时随地，</p>\r\n        <p class=\"desc\">不同的设备，用不同的方式</p>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n", data));
      $('#bottom-footer').html(_.template("<div class=\"footer2\">\r\n  <div class=\"footer-wrap second-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <img src=\"/images/zkm-logo2.png\" class=\"zkm-logo\"/>\r\n        <span class=\"inner-title\">招客猫</span>\r\n        版权所有©2018  网站备案/许可证号：\r\n       <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"));
      $('.special').smoove();  // 页面内容随滚动条变化动态
  
  };
  
  module.exports = controller;
  

});
