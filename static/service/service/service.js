define('modules/service/service/service', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/service/service/service.css*/;
  var controller = function() {
      var data = {};
  
      // 软件定制
      data.software = {
        title: '一站式软件定制与高品质售后服务',
        list: [{
          pic: '/images/service/soft(4).png',
          text: 'Android开发',
        }, {
          pic: '/images/service/soft(1).png',
          text: 'IOS开发',
        }, {
          pic: '/images/service/soft(2).png',
          text: '微信开发',
        }, {
          pic: '/images/service/soft(3).png',
          text: 'Web开发',
        }]
      }
  
      appView.html(_.template("<div id=\"service-service\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>专属私人定制</p>\r\n          <p>低成本，高效率</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bgGray con5-wrap\">\r\n    <div class=\"main-content\">\r\n      <p class=\"commonTitle\">您的需求招客猫都能满足</p>\r\n      <p class=\"titleDesc special\" data-move-y=\"200px\">招客猫拥有一支专业的互联网软件开发团队，拥有超过5个主流卡法平台，从设计到研发再到产品上线，\r\n          强大的研发能力为您提供专属于您的软件定制，体统专业的软件服务，帮助商家一站式解决上线零销售问题</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"con2-wrap\">\r\n    <div class=\"con2-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <p class=\"title\">店铺自定义从主题到页面<p>\r\n        <p class=\"desc\">店铺装修，店铺主题，页面和营销活动，<br/>都可以根据您的需求提供专属定制服务</p>\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <img src=\"/images/service/service(1).png\" />\r\n      </span>\r\n    </div>\r\n    <div class=\"con2-wrap-content\">\r\n      <span class=\"special\" data-move-x=\"-400px\">\r\n        <img src=\"/images/service/service(2).png\" />\r\n      </span>\r\n      <span class=\"special\" data-move-x=\"400px\">\r\n        <p class=\"title\">小程序定制<p>\r\n        <p class=\"desc\">为你带来更多新会员，满足更多特定需求场景</p>\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap bgGray\">\r\n    <p class=\"commonTitle\"><%= software.title %></p>\r\n    <div class=\"con3-wrap-content flex\">\r\n      <% _.each(software.list, function(item, index) {%>\r\n      <div class=\"special\" data-move-y=\"-500px\">\r\n        <span class=\"pic\">\r\n            <img src=\"<%= item.pic %>\" />\r\n        <span>\r\n        <p><%= item.text %></p>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n  <div class=\"con4-wrap\">\r\n    <div class=\"con4-wrap-content\">\r\n      <div class=\"main-content\">\r\n        <div  class=\"special\" data-rotate-y=\"90deg\">\r\n          <p class=\"title\">联系我们</p>\r\n          <p>如果您需要开发一个能为企业带来效益的精品APP软件，</p>\r\n          <p>如果您还在为以往没有经过专业开发流程开发的不专业APP软件烧钱，</p>\r\n          <p>如果您还以为您的APP软件十分有价值，如果您想好好利用您手上的APP软件开发这个市场请联系我们</p>\r\n          <p class=\"secondTitle\">联系电话： 18026260181/刘生</p>\r\n          <p class=\"secondTitle\">商务合作： service@idaoben.com</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", data));
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
