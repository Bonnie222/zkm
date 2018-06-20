define('modules/home/store/store', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/home/store/store.css*/;
  var controller = function() {
      var data = {};
      // 优势
      data.model = {
        title: '多种营销模式，助您生意兴隆',
        list: [{
            pic: '/images/store/model(1).png',
            text: '会员营销',
            desc: '零成本升会员，支付即成会员'
        }, {
            pic: '/images/store/model(2).png',
            text: '卡券营销',
            desc: '消费即送卡券，敢买我就敢送',
        }, {
            pic: '/images/store/model(3).png',
            text: '分享拼团',
            desc: '多人拼购买，多拉人享返利',
        }]
      };
  
      // 管理
      data.manage = {
        title: '强大的管理系统为您的生意分忧',
        list: [{
          pic: '/images/store/icon-store.svg',
          text: '门店管理',
        }, {
          pic: '/images/store/icon-order.svg',
          text: '订单管理',
        }, {
          pic: '/images/store/icon-chain.svg',
          text: '连锁管理',
        }, {
          pic: '/images/store/icon-operat.svg',
          text: '运营管理',
        }, {
          pic: '/images/store/icon-customer.svg',
          text: '客户管理',
        }, {
          pic: '/images/store/icon-sell.svg',
          text: '销售管理',
        }, {
          pic: '/images/store/icon-ditch.svg',
          text: '渠道管理',
        }, {
          pic: '/images/store/icon-data.svg',
          text: '数据分析',
        }]
      }
  
      // 运营体系
      data.system = {
        title: '完整会员营销运营体系',
        list: [{
          pic: '/images/store/system(1).png',
          title: '会员成长体系',
          desc: '标签/积分/等级/折扣整套会员成长机制',
        }, {
          pic: '/images/store/system(2).png',
          title: '会员转化体系',
          desc: '打造客户关系运营新阵地提升社会化传播',
        }, {
          pic: '/images/store/system(3).png',
          title: '会员分析体系',
          desc: '基于会员数据,由智能分析模型驱动',
        }]
      }
      // 营销工具
      data.sell = {
        title: '营销工具',
        list: [{
          pic: '/images/store/sell(1).png',
          title: '会员权益',
          desc: '由消费积累金额决定，消费积累金额越高会员等级越高，享受到的会员权益越大。',
        }, {
          pic: '/images/store/sell(2).png',
          title: '社会分享',
          desc: '用户分享是社交网络存在的基础。借助分享，人们表达自我、建立关系、让信息传播。',
        }, {
          pic: '/images/store/sell(3).png',
          title: '积分收益',
          desc: '会员在享受轻松购物的同时可获得相应的积分。',
        }, {
          pic: '/images/store/sell(4).png',
          title: '邮件营销',
          desc: '它是最古老的网络推广方法之一,也最成熟的营销方法之一。',
        }, {
          pic: '/images/store/sell(5).png',
          title: '多种支付',
          desc: '随时随地支付，方便快捷。',
        }]
      }
      appView.html(_.template("<div id=\"home-store\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>一站式管理平台</p>\r\n          <p>会员营销，门店管理</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bgGray\">\r\n    <div class=\"con2-wrap\">\r\n      <p class=\"commonTitle\"><%= model.title %></p>\r\n      <div class=\"con2-wrap-content\">\r\n        <% _.each(model.list, function(item){ %>\r\n        <div>\r\n          <img src=\"<%= item.pic %>\" />\r\n          <p class=\"title\"><%= item.text %></p>\r\n          <P class=\"desc\"><%= item.desc %></p>\r\n        </div>\r\n        <% }) %>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap\">\r\n    <p class=\"commonTitle\"><%= manage.title %></p>\r\n    <div class=\"con3-wrap-content flex\">\r\n      <% _.each(manage.list, function(item, index) {%>\r\n        <% if(index==0 || index==4){ %>\r\n      <div class=\"special\" data-move-x=\"-500px\">\r\n        <% } else if(index==3 || index==7) {%>\r\n      <div class=\"special\" data-move-x=\"500px\">\r\n        <% } else { %>\r\n      <div class=\"special\" data-scale=\"0.8\">\r\n        <% } %>\r\n        <img src=\"<%= item.pic %>\" />\r\n        <p><%= item.text %></p>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n  <div class=\"con4-wrap bgGray\">\r\n    <p class=\"commonTitle\"><%= sell.title %></p>\r\n    <div class=\"con4-wrap-content\">\r\n      <ul class=\"con4-wrap-ul\">\r\n        <% _.each(sell.list, function(item, index) {%>\r\n          <% if(index==2){ %>\r\n        <li class=\"active\">\r\n          <% }else{ %>\r\n        <li>\r\n          <% } %>\r\n          <div class=\"normal-inner\">\r\n            <img src=\"<%= item.pic %>\"/>\r\n          </div>\r\n          <div class=\"active-inner\">\r\n            <p><%= item.desc %></p>\r\n          </div>\r\n          <p class=\"title\"><%= item.title %></p>\r\n        </li>\r\n        <% }) %>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"con5-wrap main-content\">\r\n    <p class=\"commonTitle\"><%= system.title %></p>\r\n    <div class=\"flex\">\r\n      <% _.each(system.list, function(item){ %>\r\n      <div class=\"con5-item\">\r\n        <img src=\"<%= item.pic %>\"/>\r\n        <div class=\"con5-item-desc\">\r\n          <p class=\"title\"><%= item.title %></p>\r\n          <p class=\"desc\"><%= item.desc %></p>\r\n        </div>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n</div>\r\n", data));
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
