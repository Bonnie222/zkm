require('libs/plugins/jquery.smoove');
require('cashier.less');
var controller = function() {
    var data = {};

    data.cause = {
      title: '为什么会选择我们',
      list: [{
        pic:__uri('images/cashier/cause(1).png'),
        title: '银行卡收单',
        desc: 'pos收单，订单支付'
      }, {
        pic:__uri('images/cashier/cause(2).png'),
        title: '基金支付',
        desc: '提供安全、方便、快捷的基金支付'
      }, {
        pic:__uri('images/cashier/cause(3).png'),
        title: '预付卡支付',
        desc: '预付卡业务智慧城市业务'
      }, {
        pic:__uri('images/cashier/cause(4).png'),
        title: '互联网支付',
        desc: '移动支付、跨境支付'
      }, {
        pic:__uri('images/cashier/cause(5).png'),
        title: '金融服务',
        desc: '万证通服务、理财服务'
      }]
    }

    appView.html(_.template(__inline('cashier.html'), data));
    $('#bottom-footer').html(_.template(__inline('templates/footer/footer2.html')));
    $('.special').smoove();  // 页面内容随滚动条变化动态

};

module.exports = controller;
