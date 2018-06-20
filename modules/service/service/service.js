require('libs/plugins/jquery.smoove');
require('service.less');
var controller = function() {
    var data = {};

    // 软件定制
    data.software = {
      title: '一站式软件定制与高品质售后服务',
      list: [{
        pic: __uri('images/service/soft(4).png'),
        text: 'Android开发',
      }, {
        pic: __uri('images/service/soft(1).png'),
        text: 'IOS开发',
      }, {
        pic: __uri('images/service/soft(2).png'),
        text: '微信开发',
      }, {
        pic: __uri('images/service/soft(3).png'),
        text: 'Web开发',
      }]
    }

    appView.html(_.template(__inline('service.html'), data));
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
