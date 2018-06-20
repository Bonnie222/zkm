define('modules/home/social/social', function(require, exports, module) {

  require('libs/plugins/jquery.smoove');
  require('libs/jquery.min');
  ''/*@require /static/home/social/social.css*/;
  var controller = function() {
      var data = {};
      // 案例
      data.template = {
        title: '经典裂变营销案列',
        list: [{
          title: '支付宝集五福',
          pic: '/images/social/template(1).png',
          desc: '失联多年的朋友突然主动联系我加支付宝好友要福字，于是我也开始了集五福',
        }, {
          title: '微信跨屏抢红包',
          pic: '/images/social/template(3).png',
          desc: '春晚播放时出现可以使用微信摇一摇跨屏抢红包，平时不怎么上网的长辈们都用上了微信了，微信支付，借力春晚增加自身竞争力，如今手机使用者几乎全民使用微信支付',
        }, {
          title: '优酷边看边买',
          pic: '/images/social/template(4).png',
          desc: '优酷联合阿里巴巴推出“边看边买视频内容直观呈现购物通道，用户观看视频时”添加购物车，观看结束提醒购买，同时增加视频观看和购买量',
        },{
          title: '直播互动引发直播热潮',
          pic: '/images/social/template(2).png',
          desc: '直播是未来互联网最丰富，也是最强有力的表达方式和营销模式，而助推直播的一股力中坚量便是裂变，小米发布会在小米手机的成功，也是得益于裂变营销，各大平台直播发布会一传十，十传百的威力使其快速成长为手机厂商佼佼者',
        }]
      };
  
      // 优势
      data.advantage = {
        title: '三大无法拒绝的优势',
        list: [{
            pic: '/images/social/advant(1).png',
            text: '成本很低',
        }, {
            pic: '/images/social/advant(2).png',
            text: '效果迅速',
        }, {
            pic: '/images/social/advant(3).png',
            text: '影响力大',
        }]
      };
      data.firstMp4 = 'images/videos/social/video(1).mp4';
      appView.html(_.template("<div id=\"home-social\">\r\n  <div class=\"con1-wrap\">\r\n    <div class=\"common-pagehead\">\r\n      <div class=\"common-pagehead-wrap\">\r\n        <span>\r\n          <p>互联网时代</p>\r\n          <p>消费者升级为消费商</p>\r\n          <!-- <p>\r\n            <a class=\"link-a\" target=\"_blank\" href=\"https://merchant.zhaokemall.com/\">立即试用</a>\r\n          </p> -->\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bgGray\">\r\n    <div class=\"con2-wrap\">\r\n      <p class=\"commonTitle\"><%= advantage.title %></p>\r\n      <div class=\"con2-wrap-content\">\r\n        <% _.each(advantage.list, function(item){%>\r\n        <div>\r\n          <img src=\"<%= item.pic %>\" />\r\n          <p><%= item.text %></p>\r\n        </div>\r\n        <% }) %>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con3-wrap\">\r\n    <p class=\"commonTitle\">迅速了解裂变营销</p>\r\n    <div class=\"con3-wrap-content\">\r\n      <div class=\"main-content\">\r\n        <div  class=\"special\" data-rotate-y=\"90deg\">\r\n          裂变营销以传统的终端促销的加强为基础，整合了关系营销，数据库营销和\r\n          会务营销等新型营销方式的方法和理念。这种裂变模式其实指的是终端市场的裂变。\r\n          传播个体（企业/个人等）通过在社群（种子用户）中发布一个含有诱饵的内容，\r\n          引发用户争相传播，从而达到一个用户带动身边N个（裂变）用户的目的。移动\r\n          互联网营销的本质，就是裂变营销。\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con4-wrap bgGray\">\r\n    <p class=\"commonTitle\">我们怎么运用裂变营销</p>\r\n    <div class=\"video-wrap\">\r\n       <div class=\"sp1\">\r\n            <div class=\"inner\">\r\n                <video id=\"example_video\" class=\"video-js vjs-default-skin\" preload=\"none\"  autoplay width=\"100%\" height=\"100%\" data-setup=\"{}\">\r\n                    <source src=\"<%= firstMp4 %>\" type='video/mp4' />\r\n                </video>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"sp2\">\r\n            <div class=\"inner\">\r\n                <video id=\"example_video2\" class=\"video-js vjs-default-skin\" preload=\"none\" autoplay width=\"100%\" height=\"100%\" data-setup=\"{}\">\r\n                    <source src=\"videos/social/video(2).mp4\" type='video/mp4' />\r\n                </video>\r\n            </div>\r\n        </div>\r\n        <div class=\"sp3\">\r\n            <div class=\"inner\">\r\n                <video id=\"example_video3\" class=\"video-js vjs-default-skin\" preload=\"none\" autoplay width=\"100%\" height=\"100%\" data-setup=\"{}\">\r\n                    <source src=\"videos/social/video(3).mp4\" type='video/mp4' />\r\n                </video>\r\n            </div>\r\n        </div>\r\n        <div class=\"sp4\">\r\n            <div class=\"inner\">\r\n                <video id=\"example_video4\" class=\"video-js vjs-default-skin\" preload=\"none\" autoplay width=\"100%\" height=\"100%\" data-setup=\"{}\">\r\n                    <source src=\"videos/social/video(4).mp4\" type='video/mp4' />\r\n                </video>\r\n            </div>\r\n        </div>-->\r\n        <div class=\"videoch\">\r\n            <ul class=\"flex\">\r\n                <li class=\"vidf1 music active\" id=\"vidf1\" data-index=\"4\">\r\n                    <i></i><i></i>\r\n                    <i></i><i></i>\r\n                    <i></i><i></i>\r\n                    <i></i><i></i>\r\n                    <i></i><i></i>\r\n                    <i></i><i></i>\r\n                    <i></i><i></i>\r\n                </li>\r\n                <li class=\"vidf2 music\"  id=\"vidf2\" data-index=\"0\">\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                </li>\r\n                <li class=\"vidf3 music\" id=\"vidf3\" data-index=\"1\">\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                </li>\r\n                <li class=\"vidf4 music\" id=\"vidf4\" data-index=\"2\">\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                </li>\r\n                <li class=\"vidf5 music\" id=\"vidf5\" data-index=\"3\">\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                  <i></i><i></i>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"con5-wrap main-content\">\r\n    <p class=\"commonTitle\"><%= template.title %></p>\r\n    <div class=\"flex\">\r\n      <% _.each(template.list, function(item, index) {%>\r\n        <% if(index%2 == 0) { %>\r\n      <div class=\"con5-item special\" data-move-y=\"-400px\">\r\n        <% } else { %>\r\n      <div class=\"con5-item special\" data-move-y=\"400px\">\r\n        <% } %>\r\n        <div class=\"con5-item-content\">\r\n          <img src=\"<%= item.pic %>\" />\r\n          <div class=\"con5-item-desc\">\r\n            <%= item.desc %>\r\n          </div>\r\n        </div>\r\n        <p><%= item.title %></p>\r\n      </div>\r\n      <% }) %>\r\n    </div>\r\n  </div>\r\n</div>\r\n", data));
      $('#bottom-footer').html(_.template("<div class=\"footer2\">\r\n  <div class=\"footer-wrap second-footer\">\r\n    <div class=\"footer-copyright\">\r\n        <img src=\"/images/zkm-logo2.png\" class=\"zkm-logo\"/>\r\n        <span class=\"inner-title\">招客猫</span>\r\n        版权所有©2018  网站备案/许可证号：\r\n       <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"));
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
        var videoList = ['/images/videos/social/video(2).mp4','/images/videos/social/video(3).mp4', '/images/videos/social/video(4).mp4', '/images/videos/social/video(5).mp4',  '/images/videos/social/video(1).mp4'];
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
  

});
