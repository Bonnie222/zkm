require('libs/plugins/jquery.smoove');
require('support.less');
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
          pic: __uri('images/support/use (1).png'),
          text: '商品管理',
          desc: '账号、模板、门店基本信息'
      }, {
          pic: __uri('images/support/use (5).png'),
          text: '店铺设置',
          desc: '图片管理、购物管理',
      }, {
          pic: __uri('images/support/use (4).png'),
          text: '预约管理',
          desc: '所有预约、新增预约',
      }, {
          pic: __uri('images/support/use (2).png'),
          text: '统计管理',
          desc: '财务数据、门店统计、会员统计',
      }, {
          pic: __uri('images/support/use (7).png'),
          text: '公告管理',
          desc: '所有公告、创建公告',
      }, {
          pic: __uri('images/support/use (6).png'),
          text: '订单管理',
          desc: '发货订单、订单详情',
      }, {
          pic: __uri('images/support/use (8).png'),
          text: '客户管理',
          desc: '个性化操作界面',
      }, {
          pic: __uri('images/support/use (3).png'),
          text: '营销管理',
          desc: '会员等级、会员积分、会员管理',
      }]
    };


    // 运营体系
    data.question = {
      title: '常见问题',
      list: [{
        pic: __uri('images/support/question (3).png'),
        title: '基础使用',
        linkList: [{
          name: '企业介绍'
        }, {
          name: '数据安全'
        }, {
          name: '系统安全'
        }],
      }, {
        pic: __uri('images/support/question (1).png'),
        title: '硬件设备',
        linkList: [{
          name: '网页'
        }, {
          name: '手机端'
        }],
      }, {
        pic: __uri('images/support/question (2).png'),
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

    appView.html(_.template(__inline('support.html'), data));
    $('#bottom-footer').html(_.template(__inline('templates/footer/footer2.html')));
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
        $('#support-content').append(_.template(__inline('content-temp/instructionWrap.html'), info));
      } else {
        el.replaceWith(_.template(__inline('content-temp/instructionWrap.html'), info));
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
      $('.storeSet').append(_.template(__inline('content-temp/instructionHtml/storeSet.html')));
      $('.merchandise').append(_.template(__inline('content-temp/instructionHtml/merchandise.html')));
      $('.booking').append(_.template(__inline('content-temp/instructionHtml/booking.html')));
      $('.order').append(_.template(__inline('content-temp/instructionHtml/order.html')));
      $('.notice').append(_.template(__inline('content-temp/instructionHtml/notice.html')));
      $('.customer').append(_.template(__inline('content-temp/instructionHtml/customer.html')));
      $('.marketing').append(_.template(__inline('content-temp/instructionHtml/marketing.html')));
        $('.statistical').append(_.template(__inline('content-temp/instructionHtml/statistical.html')));
      $(".instruction-container > *").hide();
    }

    function getQuestion() {
      var el = $('#questionWrap');
      if(!el.length) {
        $('#support-content').append(_.template(__inline('content-temp/questionWrap.html')));
      } else {
        el.replaceWith(_.template(__inline('content-temp/questionWrap.html')));
      }
    }
    function getContact() {
      var el = $('#contactWrap');
      if(!el.length) {
        $('#support-content').append(_.template(__inline('content-temp/contactWrap.html')));
      } else {
        el.replaceWith(_.template(__inline('content-temp/contactWrap.html')));
      }
    }
};

module.exports = controller;
