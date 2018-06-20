require('libs/plugins/jquery.smoove');
require('model.less');
var controller = function() {
    var data = {};

    data.store = {
      title: '招客猫新零售适用于众多门店',
      list: [{
        pic:__uri('images/model/store(4).png'),
        title: '便利店'
      }, {
        pic:__uri('images/model/store(5).png'),
        title: '零售店'
      }, {
        pic:__uri('images/model/store(2).png'),
        title: '服装店'
      }, {
        pic:__uri('images/model/store(6).png'),
        title: '餐饮店'
      }, {
        pic:__uri('images/model/store(3).png'),
        title: '小超市'
      }, {
        pic:__uri('images/model/store(1).png'),
        title: '糕点房'
      }]
    }

    appView.html(_.template(__inline('model.html'), data));
    $('#bottom-footer').html(_.template(__inline('templates/footer/footer2.html')));

    $('.special').smoove();  // 页面内容随滚动条变化动态

};

module.exports = controller;
