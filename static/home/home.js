define('modules/home/home', function(require, exports, module) {

  require('libs/plugins/jquery.superslides');
  require('libs/plugins/jquery.running.min');
  require('libs/plugins/jquery.smoove');
  ''/*@require css/jquery.running.css*/;
  ''/*@require css/superslides.css*/;
  ''/*@require /static/home/home.css*/;
  var controller = function() {
      var data = {};
      data.partnerList = [{
        logo: '/images/home/partner (1).png',
        desc: '迅驰奥车行，互联网经营模式具备高品质的产品及专业的施工队伍，以车辆更漂亮，更靓丽、更安全为公司经营核心。',
        code:  '/images/home/partner2 (1).jpg',
      }, {
        logo: '/images/home/partner (5).png',
        desc: '买衣服尽在靓衣阁-优选全球千万品质商品,网购衣服当然选靓衣阁!应有尽有!惊喜不断!',
        code:  '/images/home/partner2 (5).jpg',
      }, {
        logo: '/images/home/partner (6).png',
        desc: '晴美人美容会所多年美容领航品牌,拥有明星医师团队,精雕细琢,让您美颜盛世！晴美人美容会所等你来！',
        code:  '/images/home/partner2 (6).jpg',
      }, {
        logo: '/images/home/partner (2).png',
        desc: '服务涵盖基础、疗效性、美体以及仪器护理，为您提供有归属感的美容体验。',
        // code:  __uri('images/home/partner (1).png'),
      }, {
        logo: '/images/home/partner (3).png',
        desc: '主要经营范围包含戒指、项链、吊坠、耳饰和手镯，为您提供最优质的黄金产品。',
        // code:  __uri('images/home/partner (1).png'),
      }, {
        logo: '/images/home/partner (4).png',
        desc: '帮助您设置科学健身课程,制定减肥方法,配置健康饮食,让您轻松减肥,快速塑形,一起嗨运动!',
        // code:  __uri('images/home/partner (1).png'),
      }
      // ,  {
      //   logo: __uri('images/home/partner (7).png'),
      //   desc: '晴美人美容会所多年美容领航品牌,拥有明星医师团队,精雕细琢,让你美颜盛世！晴美人美容会所等你来！',
      //   code:  __uri('images/home/partner (1).png'),
      // }
    ];
  
  
      appView.html(_.template("<div id=\"home-home\">\r\n    <div class=\"slider\" id=\"sliderWrap\">\r\n        <div id=\"slides\">\r\n            <ul class=\"slides-container\">\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div class=\"con1-wrap\" id=\"con1Wrap\">\r\n      <div>\r\n        已入驻招客猫商家“上百”家\r\n      </div>\r\n    </div>\r\n    <div class=\"bgGray\">\r\n      <div class=\"con2-wrap flex\" id=\"con2Wrap\">\r\n        <div class=\"con2-left special\" data-move-x=\"-200px\">\r\n          <img src=\"/images/home/storeMange.png\"/>\r\n        </div>\r\n        <div class=\"con2-right con-info special\"  data-rotate-y=\"90deg\">\r\n          <div class=\"con-title\">\r\n            <p>门店营销管理</p>\r\n            <p class=\"english\">STORE MARKETING MANAGEMENT</p>\r\n          </div>\r\n          <div class=\"con-desc\">\r\n            <p>打通线上微门店与线下实体店便捷高效的管理您的各大门店</p>\r\n            <p>每日订单，每日收益一目了然</p>\r\n          </div>\r\n          <div class=\"con-btn\">\r\n            <a href=\"#/home/store\">了解详情</a>\r\n            <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=3564634648&site=qq&menu=yes\"\r\n              >在线咨询</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"bgRed\">\r\n      <div class=\"con3-wrap flex\">\r\n        <div class=\"con2-left con-info special\" data-rotate-y=\"90deg\">\r\n          <div class=\"con-title\">\r\n            <p>社交裂变营销</p>\r\n            <p class=\"english\">SOCIAL MARKETING</p>\r\n          </div>\r\n          <div class=\"con-desc\">\r\n            <p>借力小程序， 玩转社交营销最大限度获取新会员</p>\r\n          </div>\r\n          <div class=\"con-btn\">\r\n            <a href=\"#/home/social\">了解详情</a>\r\n            <a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=3564634648&site=qq&menu=yes\"\r\n               >在线咨询</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"con2-right special\" data-move-x=\"200px\">\r\n          <img src=\"/images/home/social.png\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"bgGray con4-wrap\" id=\"picWrap\">\r\n      <div class=\"overShade\">\r\n        <div class=\"con4-content flex\">\r\n          <div class=\"picture-wrap flex\">\r\n            <div class=\"pic-computer special\" data-move-x=\"1000px\">\r\n              <div class=\"bgPic\">\r\n                <img id=\"computerBg\" src=\"/images/home/tab1(1).png\"/>\r\n              </div>\r\n            </div>\r\n            <div class=\"pic-phone  special\" data-move-x=\"-1000px\">\r\n              <div class=\"bgPic\">\r\n                <img id=\"phoneBg\" src=\"/images/home/tab1(3).png\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"hover-wrap flex\" id=\"iconHoverWrap\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"con5-wrap\">\r\n      <p class=\"title special\" data-scale=\"0.5\">他们都在使用招客猫小程序</p>\r\n      <div class=\"partner-wrap flex\">\r\n        <% _.each(partnerList, function(item){ %>\r\n        <div class=\"partner-outer\">\r\n          <div class=\"partner-item\">\r\n            <img src=\"<%= item.logo %>\"/>\r\n            <p><%= item.desc %></p>\r\n          </div>\r\n          <% if(item.code) { %>\r\n            <div class=\"partner-code\">\r\n              <img src=\"<%= item.code %>\"/>\r\n            </div>\r\n          <% } %>\r\n        </div>\r\n        <% }) %>\r\n      </div>\r\n    </div>\r\n</div>\r\n", data));
  
      initFooter();
      initIcon();
      initSlide();
      iconClick();
      partnerHover();
      $('body').running();     // 数字奔跑
      $('.special').smoove();  // 页面内容随滚动条变化动态
  
  
      function initFooter(){
        var footerData = {
            link: [{
              title: '产品与服务',
              linkMenu: [{
                text: '招客猫微商城',
                url: '#/product/mall'
              }, {
                text: '招客猫收银',
                url: '#/product/cashier'
              }, {
                text: '招客猫新零售',
                url: '#/product/model'
              }, {
                text: '小程序',
                url: '#/service/program'
              }, {
                text: '定制服务',
                url: '#/service/service'
              }]
            }, {
              title: '开发与合作',
              linkMenu: []
            }, {
              title: '帮助支持',
              linkMenu: []
            }, {
              title: '关于招客猫',
              linkMenu: []
            }],
          };
  
          $('#bottom-footer').html(_.template("<div class=\"footer\">\r\n  <div class=\"footer-wrap\">\r\n    <div class=\"footer-con\">\r\n      <% _.each(link, function(item){ %>\r\n      <div class=\"footer-inner\">\r\n        <p class=\"inner-title\"><%= item.title %></p>\r\n        <% _.each(item.linkMenu, function(menu){ %>\r\n        <p class=\"inner-text\">\r\n          <a href=\"<%= menu.url %>\"><%= menu.text %></a>\r\n        </p>\r\n        <%  }) %>\r\n      </div>\r\n      <%  }) %>\r\n      <div class=\"footer-inner pull-right\">\r\n        <p class=\"inner-title\">联系方式</p>\r\n        <p class=\"inner-text\">客服热线：400 - 870 - 0838</p>\r\n        <p class=\"inner-text\">周一至周五 9：00 - 18：30</p>\r\n        <!-- <p class=\"inner-text wx-wrap\">微信公众号\r\n          <div class=\"wx-logo\">\r\n            <img src=\"images/home/weixin.png\" />\r\n          </div>\r\n        </p> -->\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n      <img src=\"/images/zkm-logo.png\" class=\"zkm-logo\"/>\r\n      <span>版权所有 ©2018  网站备案/许可证号：</span>\r\n      <a href=\"http://www.miitbeian.gov.cn\" target=\"_blank\">粤ICP备17156402号-2</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n", footerData));
          $('.wx-wrap').hover(function() {
            $('.wx-logo').fadeIn(500);
          }, function() {
            $('.wx-logo').fadeOut(500);
          })
      }
  
      //  顶部轮播
      function initSlide() {
          var picList = [{
            picture: '/images/home/banner1.png',
            title: '招客猫，新零售',
            desc: '颠覆传统零售，线上线下齐头并进<br/>20万+商店的共同选择',
            link:{
              text: '立即试用',
              href: 'https://merchant.zhaokemall.com/'
            }
          }, {
            picture: '/images/home/banner2.png',
            title: '招客猫，您的招财猫',
            desc: '让天下没有难做的生意',
            link: {
              text: '立即试用',
              href: 'https://merchant.zhaokemall.com/'
            }
          }, {
            picture: '/images/home/banner3.png',
            title: '零门槛使用小程序',
            desc: '抢占市场，畅享小程序流量红利',
            link: {
              text: '立即试用',
              href: 'https://merchant.zhaokemall.com/'
            }
          }];
          var picWrapEle = $('#slides').find('.slides-container');
          for (var i = 0, len = picList.length; i < len; i++) {
              var item = picList[i];
              picWrapEle.append('<li class="slider-li"><img src=' + item.picture +
                                '><span class="slider-text"><p class="title">'+ item.title +
                                '</p><p class="desc">'+ item.desc + '</p></span></li>');
          }
          var opts = {
              play: 5000,
              animation_speed: 1000,
              inherit_width_from: $("#sliderWrap"),
              inherit_height_from: $("#sliderWrap")
          };
          $('#slides').superslides(opts);
      }
  
      // 图标模块
      function initIcon() {
        var iconList = [{
          icon: '/images/home/icon-car.svg',
          icon1: '/images/home/icon-car1.svg',
          text: '车行',
        }, {
          icon: '/images/home/icon-entertain.svg',
          icon1: '/images/home/icon-entertain1.svg',
          text: '娱乐',
        }, {
          icon: '/images/home/icon-beauty.svg',
          icon1: '/images/home/icon-beauty1.svg',
          text: '美业',
        }, {
          icon: '/images/home/icon-food.svg',
          icon1: '/images/home/icon-food1.svg',
          text: '餐饮',
        }]
  
        for (var i = 0; i < iconList.length; i++) {
          var item = iconList[i];
          if ( i == 0 ) {  // 默认第一个
            $("#iconHoverWrap").append('<span class="hover-tab"><img src=' + item.icon1 +
              ' class="icon" id="icon'+ (i+1) + '"/><p>'+ item.text +'</p></span>');
          } else {
            $("#iconHoverWrap").append('<span class="hover-tab"><img src=' + item.icon +
              ' class="icon" id="icon'+ (i+1) + '"/><p>'+ item.text +'</p></span>');
          }
        }
      }
  
      // 合作伙伴鼠标滑过
      function partnerHover(){
        $(".partner-outer").hover(
          function(){
            $(this).find(".partner-code").slideDown();
          },
          function(){
            $(this).find(".partner-code").slideUp();
          }
        );
      }
  
      // 鼠标移到不同icon 切换不同图片
      function iconClick() {
        $(".hover-tab").click(
          function() {
            var iconList = [{
              icon: '/images/home/icon-car.svg',
              icon1: '/images/home/icon-car1.svg',
            }, {
              icon: '/images/home/icon-entertain.svg',
              icon1: '/images/home/icon-entertain1.svg',
            }, {
              icon: '/images/home/icon-beauty.svg',
              icon1: '/images/home/icon-beauty1.svg',
            }, {
              icon: '/images/home/icon-food.svg',
              icon1: '/images/home/icon-food1.svg',
            }];
  
            $("#computerBg").removeClass('animationFadeInLeft');
            $("#phoneBg").removeClass('animationFadeInLeft');
            // 获取icon 最后一个数字
            var num = $(this).children('.icon').attr('id').replace("icon", "");
            for (var i = 0; i < iconList.length; i++) {
              var item = iconList[i];
              if (i == (parseInt(num-1))) {
                  $(this).children('.icon')[0].src = item.icon1;
              } else {
                $('#icon'+(i+1))[0].src = item.icon;
              }
            }
            var picList = [{
              picUrl1: '/images/home/tab1(1).png',
              picUrl3: '/images/home/tab1(3).png',
            }, {
              picUrl1: '/images/home/tab2(1).png',
              picUrl3: '/images/home/tab2(3).png',
            }, {
              picUrl1: '/images/home/tab3(1).png',
              picUrl3: '/images/home/tab3(3).png',
            }, {
              picUrl1: '/images/home/tab4(1).png',
              picUrl3: '/images/home/tab4(3).png',
            }]
           $("#computerBg")[0].src = picList[num-1].picUrl1;
           $("#phoneBg")[0].src = picList[num-1].picUrl3;
            setTimeout(function(){
              $("#computerBg").addClass('animationFadeInLeft');
              $("#phoneBg").addClass('animationFadeInLeft');
            }, 0);
          });
      }
  };
  
  module.exports = controller;
  

});
