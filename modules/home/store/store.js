require('libs/plugins/jquery.smoove');
require('store.less');
var controller = function() {
    var data = {};
    // 优势
    data.model = {
      title: '多种营销模式，助您生意兴隆',
      list: [{
          pic: __uri('images/store/model(1).png'),
          text: '会员营销',
          desc: '零成本升会员，支付即成会员'
      }, {
          pic: __uri('images/store/model(2).png'),
          text: '卡券营销',
          desc: '消费即送卡券，敢买我就敢送',
      }, {
          pic: __uri('images/store/model(3).png'),
          text: '分享拼团',
          desc: '多人拼购买，多拉人享返利',
      }]
    };

    // 管理
    data.manage = {
      title: '强大的管理系统为您的生意分忧',
      list: [{
        pic: __uri('images/store/icon-store.svg'),
        text: '门店管理',
      }, {
        pic: __uri('images/store/icon-order.svg'),
        text: '订单管理',
      }, {
        pic: __uri('images/store/icon-chain.svg'),
        text: '连锁管理',
      }, {
        pic: __uri('images/store/icon-operat.svg'),
        text: '运营管理',
      }, {
        pic: __uri('images/store/icon-customer.svg'),
        text: '客户管理',
      }, {
        pic: __uri('images/store/icon-sell.svg'),
        text: '销售管理',
      }, {
        pic: __uri('images/store/icon-ditch.svg'),
        text: '渠道管理',
      }, {
        pic: __uri('images/store/icon-data.svg'),
        text: '数据分析',
      }]
    }

    // 运营体系
    data.system = {
      title: '完整会员营销运营体系',
      list: [{
        pic: __uri('images/store/system(1).png'),
        title: '会员成长体系',
        desc: '标签/积分/等级/折扣整套会员成长机制',
      }, {
        pic: __uri('images/store/system(2).png'),
        title: '会员转化体系',
        desc: '打造客户关系运营新阵地提升社会化传播',
      }, {
        pic: __uri('images/store/system(3).png'),
        title: '会员分析体系',
        desc: '基于会员数据,由智能分析模型驱动',
      }]
    }
    // 营销工具
    data.sell = {
      title: '营销工具',
      list: [{
        pic: __uri('images/store/sell(1).png'),
        title: '会员权益',
        desc: '由消费积累金额决定，消费积累金额越高会员等级越高，享受到的会员权益越大。',
      }, {
        pic: __uri('images/store/sell(2).png'),
        title: '社会分享',
        desc: '用户分享是社交网络存在的基础。借助分享，人们表达自我、建立关系、让信息传播。',
      }, {
        pic: __uri('images/store/sell(3).png'),
        title: '积分收益',
        desc: '会员在享受轻松购物的同时可获得相应的积分。',
      }, {
        pic: __uri('images/store/sell(4).png'),
        title: '邮件营销',
        desc: '它是最古老的网络推广方法之一,也最成熟的营销方法之一。',
      }, {
        pic: __uri('images/store/sell(5).png'),
        title: '多种支付',
        desc: '随时随地支付，方便快捷。',
      }]
    }
    appView.html(_.template(__inline('store.html'), data));
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
