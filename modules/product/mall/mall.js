require('libs/plugins/jquery.smoove');
require('mall.less');
var controller = function() {
    var data = {};

    data.mall = {
      list: [{
        pic:__uri('images/mall/mall(5).png'),
        title: '营销大数据',
        desc: '招客猫做您的军师帮您更好决策'
      }, {
        pic:__uri('images/mall/mall(6).png'),
        title: '招客猫平台开放',
        desc: 'ERP/营销插件/硬件等工具快速打通'
      }, {
        pic:__uri('images/mall/mall(4).png'),
        title: '招客猫推广',
        desc: '覆盖巨大用户流量，定向推广'
      }]
    }

    appView.html(_.template(__inline('mall.html'), data));
    $('#bottom-footer').html(_.template(__inline('templates/footer/footer2.html')));

    $('.special').smoove();  // 页面内容随滚动条变化动态

};

module.exports = controller;
