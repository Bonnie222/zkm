define('modules/product/mall/mall', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/product/mall/mall.css*/;
  var controller = function() {
      var data = {};
  
      data.mall = {
        list: [{
          pic:'/images/mall/mall(5).png',
          title: '营销大数据',
          desc: '招客猫做您的军师帮您更好决策'
        }, {
          pic:'/images/mall/mall(6).png',
          title: '招客猫平台开放',
          desc: 'ERP/营销插件/硬件等工具快速打通'
        }, {
          pic:'/images/mall/mall(4).png',
          title: '招客猫推广',
          desc: '覆盖巨大用户流量，定向推广'
        }]
      }
  
      appView.html(_.template("<div id=\"product-mall\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>招客猫，微商城</p>\r\n          <p>低成本，高回报，轻松开网店</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bgGray\">\r\n    <div class=\"con2-wrap\">\r\n      <p class=\"commonTitle\">强大的电商系统，任您选择</p>\r\n      <div class=\"con2-wrap-content\">\r\n        <span class=\"special\" data-move-x=\"-400px\">\r\n          <p class=\"title\">众多营销方式<p>\r\n          <p class=\"desc\">促销，拉新，留存，推广，客户自传播，随时随地经营</p>\r\n          <p class=\"desc\">您要的生意经，招客猫都能有</p>\r\n        </span>\r\n        <span class=\"special\" data-move-x=\"400px\">\r\n          <img src=\"/images/mall/mall(1).png\" />\r\n        </span>\r\n      </div>\r\n      <div class=\"con2-wrap-content\">\r\n        <span class=\"special\" data-move-x=\"-400px\">\r\n          <img src=\"/images/mall/mall(2).png\" />\r\n        </span>\r\n        <span class=\"special\" data-move-x=\"400px\">\r\n          <p class=\"title\">众多主题展示<p>\r\n          <p class=\"desc\">多元化，覆盖各行业店铺模板</p>\r\n          <p class=\"desc\">随心搭配，您的店铺您做主</p>\r\n        </span>\r\n      </div>\r\n      <div class=\"con2-wrap-content\">\r\n        <span class=\"special\" data-move-x=\"-400px\">\r\n          <p class=\"title\">众多销售渠道<p>\r\n          <p class=\"desc\">您的员工，您的客户，您的亲朋好友都是销售渠道</p>\r\n        </span>\r\n        <span class=\"special\" data-move-x=\"400px\">\r\n          <img src=\"/images/mall/mall(3).png\" />\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"con3-wrap\">\r\n    <div class=\"con3-wrap-content\">\r\n      <% _.each(mall.list, function(item){%>\r\n      <div class=\"con3-wrap-item special\" data-move-y=\"200px\">\r\n        <img src=\"<%= item.pic %>\"/>\r\n        <p class=\"title\"><%= item.title %></p>\r\n        <p class=\"desc\"><%= item.desc %></p>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n</div>\r\n", data));
      $('#bottom-footer').html(_.template("<div class=\"footer2\">\r\n  <div class=\"footer-wrap second-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <img src=\"/images/zkm-logo2.png\" class=\"zkm-logo\"/>\r\n        <span class=\"inner-title\">招客猫</span>\r\n        版权所有©2018  网站备案/许可证号：\r\n       <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"));
  
      $('.special').smoove();  // 页面内容随滚动条变化动态
  
  };
  
  module.exports = controller;
  

});
