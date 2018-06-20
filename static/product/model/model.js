define('modules/product/model/model', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/product/model/model.css*/;
  var controller = function() {
      var data = {};
  
      data.store = {
        title: '招客猫新零售适用于众多门店',
        list: [{
          pic:'/images/model/store(4).png',
          title: '便利店'
        }, {
          pic:'/images/model/store(5).png',
          title: '零售店'
        }, {
          pic:'/images/model/store(2).png',
          title: '服装店'
        }, {
          pic:'/images/model/store(6).png',
          title: '餐饮店'
        }, {
          pic:'/images/model/store(3).png',
          title: '小超市'
        }, {
          pic:'/images/model/store(1).png',
          title: '糕点房'
        }]
      }
  
      appView.html(_.template("<div id=\"product-model\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>招客猫，新零售</p>\r\n          <p>新零售，新模式</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con2-wrap\">\r\n    <p class=\"commonTitle\">不同行业，不同规模，不一样的经营方案</p>\r\n    <div class=\"con2-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <p class=\"title\">跨行业<p>\r\n        <p class=\"desc\">线上or线下，您需要怎样经营，</p>\r\n        <p class=\"desc\">招客猫给您提供解决方案</p>\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <img src=\"/images/model/plan(1).png\" />\r\n      </span>\r\n    </div>\r\n    <div class=\"con2-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <img src=\"/images/model/plan(2).png\" />\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <p class=\"title\">单店版<p>\r\n        <p class=\"desc\">立刻拥有个性化网店，方便顾客随时随地购物</p>\r\n      </span>\r\n    </div>\r\n    <div class=\"con2-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <p class=\"title\">集团版<p>\r\n        <p class=\"desc\">连锁经营，统一后台管理,</p>\r\n        <p class=\"desc\">各个门店经营状况随时掌握</p>\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <img src=\"/images/model/plan(3).png\" />\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap bgGray\">\r\n    <p class=\"commonTitle\"><%= store.title %></p>\r\n    <div class=\"con3-wrap-content\">\r\n      <% _.each(store.list, function(item){%>\r\n      <div class=\"con3-wrap-item special\" data-move-y=\"-200px\">\r\n        <span class=\"pic\">\r\n          <img src=\"<%= item.pic %>\"/>\r\n        </span>\r\n        <p class=\"title\"><%= item.title %></p>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n  <div class=\"con4-wrap\">\r\n    <p class=\"commonTitle\">精准客群匹配</p>\r\n    <div class=\"con4-wrap-content special\" data-move-y=\"200px\">\r\n      <div class=\"\">\r\n        <div class=\"top-content\">\r\n          <img src=\"/images/model/mate(1).png\" />\r\n          <span class=\"first-span\">\r\n            <p>消费能力</p>\r\n            <p>职业</p>\r\n            <p>年龄</p>\r\n          </span>\r\n        </div>\r\n        <div class=\"bottom-content\">\r\n          <img src= \"/images/model/mate(3).png\" />\r\n          <span>\r\n            <p class=\"title\">消费人群</p>\r\n            <p class=\"desc\">精准匹配客户，基于门店位置寻找最优营销方案，\r\n              <br/>匹配与门店定位相符合的潜在目标客户进行商品推送</p>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"\">\r\n        <div class=\"top-content\">\r\n          <img src=\"/images/model/mate(2).png\" class=\"second-img\"/>\r\n          <span class=\"second-span\">\r\n            <p>经营痛点</p>\r\n            <p>营销亮点</p>\r\n          </span>\r\n        </div>\r\n        <div class=\"bottom-content\">\r\n          <img src= \"/images/model/mate(4).png\" />\r\n          <span>\r\n            <p class=\"title\">顾客属性</p>\r\n            <p class=\"desc\">全方位店铺分析，针对顾客属性，会员标签\r\n              <br/>经营痛点全方位分析</p>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", data));
      $('#bottom-footer').html(_.template("<div class=\"footer2\">\r\n  <div class=\"footer-wrap second-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <img src=\"/images/zkm-logo2.png\" class=\"zkm-logo\"/>\r\n        <span class=\"inner-title\">招客猫</span>\r\n        版权所有©2018  网站备案/许可证号：\r\n       <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"));
  
      $('.special').smoove();  // 页面内容随滚动条变化动态
  
  };
  
  module.exports = controller;
  

});
