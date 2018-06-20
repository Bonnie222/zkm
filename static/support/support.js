define('modules/support/support', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  ''/*@require /static/support/support.css*/;
  var controller = function() {
      var routerParam = utils.getQueryString('name');
      var data = {};
  
      // 导航
      data.tabList = {
        0: {
          name: '使用指南',
          href: '#/support/instruction',
          wrapName: 'instructionWrap',
          func: getInstruction,
        },
        1: {
          name: '常见问题',
          href: '#/support/question',
          wrapName: 'questionWrap',
          func: getQuestion,
        },
        2: {
          name: '联系客服',
          href: '#/support/contact',
          wrapName: 'contactWrap',
          func: getContact
        }
      };
  
      var tabListNum = {
        'instruction':  0,
        'question': 1,
        'contact': 2,
      }
  
      // 使用手册
      data.use = {
        title: '使用手册',
        list: [{
            pic: '/images/support/use (1).png',
            text: '商品管理',
            desc: '账号、模板、门店基本信息'
        }, {
            pic: '/images/support/use (5).png',
            text: '店铺设置',
            desc: '图片管理、购物管理',
        }, {
            pic: '/images/support/use (4).png',
            text: '预约管理',
            desc: '所有预约、新增预约',
        }, {
            pic: '/images/support/use (2).png',
            text: '统计管理',
            desc: '财务数据、门店统计、会员统计',
        }, {
            pic: '/images/support/use (7).png',
            text: '公告管理',
            desc: '所有公告、创建公告',
        }, {
            pic: '/images/support/use (6).png',
            text: '订单管理',
            desc: '发货订单、订单详情',
        }, {
            pic: '/images/support/use (8).png',
            text: '客户管理',
            desc: '个性化操作界面',
        }, {
            pic: '/images/support/use (3).png',
            text: '营销管理',
            desc: '会员等级、会员积分、会员管理',
        }]
      };
  
  
      // 运营体系
      data.question = {
        title: '常见问题',
        list: [{
          pic: '/images/support/question (3).png',
          title: '基础使用',
          linkList: [{
            name: '企业介绍'
          }, {
            name: '数据安全'
          }, {
            name: '系统安全'
          }],
        }, {
          pic: '/images/support/question (1).png',
          title: '硬件设备',
          linkList: [{
            name: '网页'
          }, {
            name: '手机端'
          }],
        }, {
          pic: '/images/support/question (2).png',
          title: '商家培训',
          linkList: [{
            name: '店铺管理'
          }, {
            name: '优惠券'
          }, {
            name: '提现'
          }]
        }]
      }
  
      appView.html(_.template("<div id=\"support-support\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>帮助中心为您解决困惑</p>\r\n          <p>快速认识招客猫 招客猫是什么 招客猫有什么 招客猫怎么用</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-wrap\">\r\n    <ul class=\"supportTab\">\r\n      <% _.each(tabList, function(item){ %>\r\n      <li>\r\n        <a href=\"<%= item.href %>\">\r\n          <label>\r\n            <input type=\"radio\" name=\"paramName\" />\r\n            <span class=\"tab-name\">\r\n              <%= item.name %>\r\n            </span>\r\n          </label>\r\n        </a>\r\n      </li>\r\n      <% }) %>\r\n    </ul>\r\n  </div>\r\n  <div class=\"support-wrap\" id=\"support-content\"></div>\r\n  <!-- <div class=\"bgGray\">\r\n    <div class=\"con2-wrap\">\r\n      <p class=\"commonTitle\"><%= use.title %></p>\r\n      <div class=\"con2-wrap-content\">\r\n        <% _.each(use.list, function(item, index) {%>\r\n          <% if(index == 0 || index == 1 || index== 2 || index==3){ %>\r\n        <a class=\"special\" data-move-y=\"-500px\">\r\n          <% }else{ %>\r\n        <a class=\"special\" data-move-y=\"500px\">\r\n          <% } %>\r\n          <span class=\"pic\">\r\n            <img src=\"<%= item.pic %>\" />\r\n          </span>\r\n          <span class=\"word\">\r\n            <p class=\"title\"><%= item.text %></p>\r\n            <p class=\"desc\"><%= item.desc %></p>\r\n          </span>\r\n        </a>\r\n        <% }) %>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap\">\r\n    <p class=\"commonTitle\"><%= question.title %></p>\r\n    <div class=\"con3-wrap-content flex\">\r\n      <% _.each(question.list, function(item, index) {%>\r\n      <div class=\"special\" data-scale=\"0.8\">\r\n        <span class=\"pic\">\r\n          <img src=\"<%= item.pic %>\" />\r\n        </span>\r\n        <span>\r\n          <p class=\"title\"><%= item.title %></p>\r\n          <% _.each(item.linkList, function(link){ %>\r\n            <a><%= link.name %></a>\r\n          <% }) %>\r\n        <span>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n  <div class=\"con4-wrap\">\r\n    <div class=\"con4-wrap-content\">\r\n      <p class=\"title\">我有问题</p>\r\n      <div class=\"content-wrap\">\r\n        <p class=\"first\">经营店铺遇到问题</p>\r\n        <p class=\"second\">发布需求经招客猫认证的优质运营团队为您解决</p>\r\n        <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=3564634648&site=qq&menu=yes\">咨询需求</a>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n</div>\r\n", data));
      $('#bottom-footer').html(_.template("<div class=\"footer2\">\r\n  <div class=\"footer-wrap second-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <img src=\"/images/zkm-logo2.png\" class=\"zkm-logo\"/>\r\n        <span class=\"inner-title\">招客猫</span>\r\n        版权所有©2018  网站备案/许可证号：\r\n       <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"));
      addClickFunToTab(data);
      $(".supportTab").find('input[type=radio]').eq(tabListNum[routerParam]).click();
  
      function addClickFunToTab(data){
      	var obj = $(".supportTab");
      	obj.on('click', 'input[type=radio]', function(){
      		var index = $(this).parents('li').index();
      		showContent(index, data);
      	});
      }
  
      function showContent(index, data) {
        var optObj = data.tabList[index];
        var obj = $("#" + optObj.wrapName);
        var newUrl = optObj.href;
        if(newUrl != location.hash) {
          history.pushState("", "", newUrl);
        }
        $("#support-content > *").hide();
        if(obj.length) {
          obj.show();
        }else {
          optObj.func();
        }
      }
  
      function getInstruction() {
        var el = $('#instructionWrap');
        var info = {};
        info.menuList = [{
          name: '店铺',
          childList: [{
            name: '店铺设置',
            className: 'storeSet',
          }],
        }, {
          name: '商品',
          childList: [{
            name: '商品管理',
            className: 'merchandise',
          }],
        }, {
          name: '预约',
          childList: [{
            name: '预约管理',
            className: 'booking',
          }],
        }, {
          name: '订单',
          childList: [{
            name: '订单管理',
            className: 'order',
          }],
        }, {
          name: '公告',
          childList: [{
            name: '公告管理',
            className: 'notice',
          }],
        }, {
          name: '客户',
          childList: [{
            name: '客户管理',
            className: 'customer',
          }],
        }, {
          name: '营销',
          childList: [{
            name: '营销管理',
            className: 'marketing',
          }],
        }, {
          name: '统计',
          childList: [{
            name: '统计管理',
            className: 'statistical'
          }],
        }];
        if(!el.length) {
          $('#support-content').append(_.template("<div id=\"instructionWrap\">\r\n  <div class=\"container-menu pull-left\">\r\n    <ul class=\"nav-menu-ul\">\r\n      <% _.each(menuList, function(item){ %>\r\n      <li class=\"nav-menu-li\">\r\n        <a class=\"nav-menu-a\">\r\n          <span><%= item.name %></span>\r\n          <span class=\"right-down pull-right\"><img src=\"/images/down.svg\" /><span>\r\n        </a>\r\n        <ul class=\"menu-sub-ul\">\r\n          <% _.each(item.childList, function(secItem){ %>\r\n          <li class=\"menu-sub-li\">\r\n            <a class=\"menu-sub-a\" data-class=\"<%= secItem.className %>\">\r\n              <span><%= secItem.name %><span>\r\n            </a>\r\n          </li>\r\n          <% }) %>\r\n        </ul>\r\n      </li>\r\n    <% }) %>\r\n    </ul>\r\n  </div>\r\n  <div class=\"instruction-container pull-left\">\r\n    <div class=\"storeSet\"></div>\r\n    <div class=\"merchandise\"></div>\r\n    <div class=\"booking\"></div>\r\n    <div class=\"order\"></div>\r\n    <div class=\"notice\"></div>\r\n    <div class=\"customer\"></div>\r\n    <div class=\"marketing\"></div>\r\n    <div class=\"statistical\"></div>\r\n  </div>\r\n</div>\r\n", info));
        } else {
          el.replaceWith(_.template("<div id=\"instructionWrap\">\r\n  <div class=\"container-menu pull-left\">\r\n    <ul class=\"nav-menu-ul\">\r\n      <% _.each(menuList, function(item){ %>\r\n      <li class=\"nav-menu-li\">\r\n        <a class=\"nav-menu-a\">\r\n          <span><%= item.name %></span>\r\n          <span class=\"right-down pull-right\"><img src=\"/images/down.svg\" /><span>\r\n        </a>\r\n        <ul class=\"menu-sub-ul\">\r\n          <% _.each(item.childList, function(secItem){ %>\r\n          <li class=\"menu-sub-li\">\r\n            <a class=\"menu-sub-a\" data-class=\"<%= secItem.className %>\">\r\n              <span><%= secItem.name %><span>\r\n            </a>\r\n          </li>\r\n          <% }) %>\r\n        </ul>\r\n      </li>\r\n    <% }) %>\r\n    </ul>\r\n  </div>\r\n  <div class=\"instruction-container pull-left\">\r\n    <div class=\"storeSet\"></div>\r\n    <div class=\"merchandise\"></div>\r\n    <div class=\"booking\"></div>\r\n    <div class=\"order\"></div>\r\n    <div class=\"notice\"></div>\r\n    <div class=\"customer\"></div>\r\n    <div class=\"marketing\"></div>\r\n    <div class=\"statistical\"></div>\r\n  </div>\r\n</div>\r\n", info));
        }
        initInstructionWrap();
        $('.storeSet').show();
        $('.nav-menu-ul .nav-menu-li').first().find('.menu-sub-ul').show();
        $('.nav-menu-ul .nav-menu-li').first().find('.nav-menu-a').addClass('active');
        $('.nav-menu-ul .nav-menu-li').first().find('.menu-sub-ul li').first().find('.menu-sub-a').addClass('active');
  
        $('.nav-menu-a').click(function(){
          $('.nav-menu-a').removeClass('active');
          var display = $(this).next('.menu-sub-ul').css('display');
  
          if(display == 'none') {
            $('.menu-sub-ul').hide();
            $(this).next('.menu-sub-ul').show();
            $(this).addClass('active');
          } else {
            $('.menu-sub-ul').hide();
            $(this).next('.menu-sub-ul').hide();
          }
        });
        $('.menu-sub-a').click(function(){
          var elCon = $('.' + $(this)[0].dataset.class);
          $('.menu-sub-a').removeClass('active');
          $(this).addClass('active');
          $(".instruction-container > *").hide();
          elCon.show();
        });
      }
  
      function initInstructionWrap() {
        $('.storeSet').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">店铺设置</p>\r\n  <p class=\"second-title\">1.如何设置店铺名字和logo？</p>\r\n  <p>登入招客猫管理平台>店铺设置>基本信息,然后填入对应信息即可。</p>\r\n  <img src=\"/images/support/instruction/storeset1.png\"/>\r\n\r\n  <p class=\"second-title\">2.如何创建新门店？</p>\r\n  <p>登入招客猫管理平台>店铺设置>门店管理,然后填入对应信息即可。</p>\r\n  <img src=\"/images/support/instruction/storeset2.png\"/>\r\n\r\n  <p class=\"second-title\">3.如何给店铺设置产品和服务的优先级（你的店铺优先展示产品还是服务）？</p>\r\n  <img src=\"/images/support/instruction/storeset3.png\"/>\r\n\r\n  <p class=\"second-title\">4.如何开启店铺应用？</p>\r\n  <img src=\"/images/support/instruction/storeset4.png\"/>\r\n\r\n  <p class=\"second-title\">5.如何设置新店员？</p>\r\n  <img src=\"/images/support/instruction/storeset5.png\"/>\r\n  <img src=\"/images/support/instruction/storeset6.png\"/>\r\n\r\n  <p class=\"second-title\">6.如何给店员设置权限？</p>\r\n  <p>店铺设置>员工管理>角色管理,然后对已添加的店员进行编辑。</p>\r\n  <img src=\"/images/support/instruction/storeset7.png\"/>\r\n\r\n  <p class=\"second-title\">7.如何开启上门自提和快递发货功能？</p>\r\n  <p>店铺设置>订单设置。</p>\r\n  <img src=\"/images/support/instruction/storeset8.png\"/>\r\n\r\n  <p class=\"second-title\">8.如何修改账号密码？</p>\r\n  <p>店铺设置>个人信息>修改密码</p>\r\n  <img src=\"/images/support/instruction/storeset9.png\"/>\r\n</div>\r\n"));
        $('.merchandise').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">商品管理</p>\r\n  <p class=\"second-title\">1.如何发布产品和服务？</p>\r\n  <p>登录招客猫管理平台>商品管理>发布产品/发布服务。</p>\r\n  <img src=\"/images/support/instruction/merchandise1.png\"/>\r\n  <img src=\"/images/support/instruction/merchandise2.png\"/>\r\n  <p>发布服务同上</p>\r\n\r\n  <p class=\"second-title\">2.如何下架商品？</p>\r\n  <img src=\"/images/support/instruction/merchandise3.png\"/>\r\n\r\n  <p class=\"second-title\">3.如何首页推荐商品？</p>\r\n  <img src=\"/images/support/instruction/merchandise4.png\"/>\r\n</div>\r\n"));
        $('.booking').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">预约管理</p>\r\n  <p class=\"second-title\">1.如何新增预约?(适用于顾客电话预约)</p>\r\n  <img src=\"/images/support/instruction/booking1.png\"/>\r\n</div>\r\n"));
        $('.order').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">订单管理</p>\r\n  <p class=\"second-title\">暂无指南</p>\r\n</div>\r\n"));
        $('.notice').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">公告管理</p>\r\n  <p class=\"second-title\">1.如何创建新的公告？</p>\r\n  <img src=\"/images/support/instruction/notice1.png\"/>\r\n\r\n  <p class=\"second-title\">2.如何修改/编辑公告？</p>\r\n  <img src=\"/images/support/instruction/notice2.png\"/>\r\n  <img src=\"/images/support/instruction/notice3.png\"/>\r\n</div>\r\n"));
        $('.customer').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">客户管理</p>\r\n  <p class=\"second-title\">1.如何导出客户列表？</p>\r\n  <img src=\"/images/support/instruction/customer1.png\"/>\r\n\r\n  <p class=\"second-title\">2.如何添加新客户？</p>\r\n  <img src=\"/images/support/instruction/customer2.png\"/>\r\n</div>\r\n"));
        $('.marketing').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">营销管理</p>\r\n  <p class=\"second-title\">1.如何设置会员等级?成长依据?各等级对应权限？</p>\r\n  <p>营销管理>会员等级</p>\r\n  <img src=\"/images/support/instruction/marketing1.png\"/>\r\n\r\n  <p class=\"second-title\">2.如何设置会员积分？消费金额和积分兑换比例？是否抵现，抵现比例等</p>\r\n  <img src=\"/images/support/instruction/marketing2.png\"/>\r\n\r\n  <p class=\"second-title\">3.如何添加和编辑修改会员标签？</p>\r\n  <img src=\"/images/support/instruction/marketing3.png\"/>\r\n\r\n  <p class=\"second-title\">4.如何新建和管理消费卡？</p>\r\n  <img src=\"/images/support/instruction/marketing4.png\"/>\r\n\r\n  <p class=\"second-title\">5.如何查看开卡记录？</p>\r\n  <img src=\"/images/support/instruction/marketing5.png\"/>\r\n\r\n  <p class=\"second-title\">6.如何发布和修改优惠券？</p>\r\n  <img src=\"/images/support/instruction/marketing6.png\"/>\r\n\r\n  <p class=\"second-title\">7.如何发布和编辑修改储值卡？</p>\r\n  <img src=\"/images/support/instruction/marketing7.png\"/>\r\n\r\n  <p class=\"second-title\">8.如何查看储值卡充值记录？</p>\r\n  <img src=\"/images/support/instruction/marketing8.png\"/>\r\n</div>\r\n"));
          $('.statistical').append(_.template("<div class=\"container-content\">\r\n  <p class=\"first-title\">统计管理</p>\r\n  <p class=\"second-title\">1.如何查看财务数据？</p>\r\n  <img src=\"/images/support/instruction/statistical1.png\"/>\r\n\r\n  <p class=\"second-title\">2.如何查看门店统计？</p>\r\n  <img src=\"/images/support/instruction/statistical2.png\"/>\r\n\r\n  <p class=\"second-title\">3.如何查看会员统计？</p>\r\n  <img src=\"/images/support/instruction/statistical3.png\"/>\r\n</div>\r\n"));
        $(".instruction-container > *").hide();
      }
  
      function getQuestion() {
        var el = $('#questionWrap');
        if(!el.length) {
          $('#support-content').append(_.template("<div id=\"questionWrap\">\r\n  暂无数据，敬请期待\r\n\r\n</div>\r\n"));
        } else {
          el.replaceWith(_.template("<div id=\"questionWrap\">\r\n  暂无数据，敬请期待\r\n\r\n</div>\r\n"));
        }
      }
      function getContact() {
        var el = $('#contactWrap');
        if(!el.length) {
          $('#support-content').append(_.template("<div id=\"contactWrap\">\r\n  暂无数据，敬请期待\r\n\r\n</div>\r\n"));
        } else {
          el.replaceWith(_.template("<div id=\"contactWrap\">\r\n  暂无数据，敬请期待\r\n\r\n</div>\r\n"));
        }
      }
  };
  
  module.exports = controller;
  

});
