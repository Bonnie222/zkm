require('libs/plugins/jquery.smoove');
require('libs/jquery.min');
require('social.less');
var controller = function() {
    var data = {};
    // 案例
    data.template = {
      title: '经典裂变营销案列',
      list: [{
        title: '支付宝集五福',
        pic: __uri('images/social/template(1).png'),
        desc: '失联多年的朋友突然主动联系我加支付宝好友要福字，于是我也开始了集五福',
      }, {
        title: '微信跨屏抢红包',
        pic: __uri('images/social/template(3).png'),
        desc: '春晚播放时出现可以使用微信摇一摇跨屏抢红包，平时不怎么上网的长辈们都用上了微信了，微信支付，借力春晚增加自身竞争力，如今手机使用者几乎全民使用微信支付',
      }, {
        title: '优酷边看边买',
        pic: __uri('images/social/template(4).png'),
        desc: '优酷联合阿里巴巴推出“边看边买视频内容直观呈现购物通道，用户观看视频时”添加购物车，观看结束提醒购买，同时增加视频观看和购买量',
      },{
        title: '直播互动引发直播热潮',
        pic: __uri('images/social/template(2).png'),
        desc: '直播是未来互联网最丰富，也是最强有力的表达方式和营销模式，而助推直播的一股力中坚量便是裂变，小米发布会在小米手机的成功，也是得益于裂变营销，各大平台直播发布会一传十，十传百的威力使其快速成长为手机厂商佼佼者',
      }]
    };

    // 优势
    data.advantage = {
      title: '三大无法拒绝的优势',
      list: [{
          pic: __uri('images/social/advant(1).png'),
          text: '成本很低',
      }, {
          pic: __uri('images/social/advant(2).png'),
          text: '效果迅速',
      }, {
          pic: __uri('images/social/advant(3).png'),
          text: '影响力大',
      }]
    };
    data.firstMp4 = 'images/videos/social/video(1).mp4';
    appView.html(_.template(__inline('social.html'), data));
    $('#bottom-footer').html(_.template(__inline('templates/footer/footer2.html')));
    templateHover();
    initVideo();
    $('.special').smoove();  // 页面内容随滚动条变化动态


    // 案例鼠标滑过
    function templateHover(){
    	$(".con5-item-desc").hide();
    	$(".con5-item-content").hover(
    		function(){
          $(this).find(".con5-item-desc").slideDown();
    		},
        function(){
    			$(this).find(".con5-item-desc").slideUp();
    		}
    	);
    }

    function initVideo() {
      var myVideo = $('#example_video')[0];
      var videoList = [__uri('images/videos/social/video(2).mp4'),__uri('images/videos/social/video(3).mp4'), __uri('images/videos/social/video(4).mp4'), __uri('images/videos/social/video(5).mp4'),  __uri('images/videos/social/video(1).mp4')];
      // var len = videoList.length;
      var len = videoList.length;
      curr = 0; //当前播放的视频
      $(".vidf1").children('i').addClass("colorOrange");
      myVideo.addEventListener("ended",function() {
        // myVideo.src = videoList[curr];
        // myVideo.src = __uri('images/videos/social/video(2).mp4');
        // myVideo.play();
        $(".videoch ul li").removeClass("active");
        $(".music i").removeClass();
        switch (curr) {
          case 0:
            $(".vidf2").children('i').addClass("colorRed");
            $(".vidf2").addClass("active");
            myVideo.src = 'images/videos/social/video(2).mp4';
            break;
          case 1:
            $(".vidf3").children('i').addClass("colorGreen");
            $(".vidf3").addClass("active");
            myVideo.src = 'images/videos/social/video(3).mp4';
            break;
          case 2:
            $(".vidf4").children('i').addClass("colorBlue");
            $(".vidf4").addClass("active");
            myVideo.src = 'images/videos/social/video(4).mp4';
            break;
          case 3:
            $(".vidf5").children('i').addClass("colorYellow");
            $(".vidf5").addClass("active");
            myVideo.src = 'images/videos/social/video(5).mp4';
            break;
          case 4:
            $(".vidf1").children('i').addClass("colorOrange");
            $(".vidf1").addClass("active");
            myVideo.src = 'images/videos/social/video(1).mp4';
            break;
        }
        // myVideo.play();
        curr++;
        if(curr >= len) curr = 0;
      }, false);

      $('.music').click(function(){
            $(".videoch ul li").removeClass("active");
            $(".music i").removeClass();
            var id = $(this).attr("id");
            var index = $("#"+id)[0].dataset.index;
            switch (index) {
              case '0':
                $(this).children('i').addClass("colorRed");
                myVideo.src = 'images/videos/social/video(2).mp4';
                break;
              case '1':
                $(this).children('i').addClass("colorGreen");
                myVideo.src = 'images/videos/social/video(3).mp4';
                break;
              case '2':
                $(this).children('i').addClass("colorBlue");
                myVideo.src = 'images/videos/social/video(4).mp4';
                break;
              case '3':
                $(this).children('i').addClass("colorYellow");
                myVideo.src = 'images/videos/social/video(5).mp4';
                break;
              case '4':
                $(this).children('i').addClass("colorOrange");
                myVideo.src = 'images/videos/social/video(1).mp4';
                break;
            }
            $(this).addClass("active");
            // myVideo.src = videoList[index];
            // myVideo.play();
            curr = ++index;
            if(index >= len) curr=0;
      })
    }
};

module.exports = controller;
