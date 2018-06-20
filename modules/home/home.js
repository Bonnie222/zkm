require('libs/plugins/jquery.superslides');
require('libs/plugins/jquery.running.min.js');
require('libs/plugins/jquery.smoove');
require('css/jquery.running.css');
require('css/superslides.css');
require('home.less');
var controller = function() {
    var data = {};
    data.partnerList = [{
      logo: __uri('images/home/partner (1).png'),
      desc: '迅驰奥车行，互联网经营模式具备高品质的产品及专业的施工队伍，以车辆更漂亮，更靓丽、更安全为公司经营核心。',
      code:  __uri('images/home/partner2 (1).jpg'),
    }, {
      logo: __uri('images/home/partner (5).png'),
      desc: '买衣服尽在靓衣阁-优选全球千万品质商品,网购衣服当然选靓衣阁!应有尽有!惊喜不断!',
      code:  __uri('images/home/partner2 (5).jpg'),
    }, {
      logo: __uri('images/home/partner (6).png'),
      desc: '晴美人美容会所多年美容领航品牌,拥有明星医师团队,精雕细琢,让您美颜盛世！晴美人美容会所等你来！',
      code:  __uri('images/home/partner2 (6).jpg'),
    }, {
      logo: __uri('images/home/partner (2).png'),
      desc: '服务涵盖基础、疗效性、美体以及仪器护理，为您提供有归属感的美容体验。',
      // code:  __uri('images/home/partner (1).png'),
    }, {
      logo: __uri('images/home/partner (3).png'),
      desc: '主要经营范围包含戒指、项链、吊坠、耳饰和手镯，为您提供最优质的黄金产品。',
      // code:  __uri('images/home/partner (1).png'),
    }, {
      logo: __uri('images/home/partner (4).png'),
      desc: '帮助您设置科学健身课程,制定减肥方法,配置健康饮食,让您轻松减肥,快速塑形,一起嗨运动!',
      // code:  __uri('images/home/partner (1).png'),
    }
    // ,  {
    //   logo: __uri('images/home/partner (7).png'),
    //   desc: '晴美人美容会所多年美容领航品牌,拥有明星医师团队,精雕细琢,让你美颜盛世！晴美人美容会所等你来！',
    //   code:  __uri('images/home/partner (1).png'),
    // }
  ];


    appView.html(_.template(__inline('home.html'), data));

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

        $('#bottom-footer').html(_.template(__inline('templates/footer/footer.html'), footerData));
        $('.wx-wrap').hover(function() {
          $('.wx-logo').fadeIn(500);
        }, function() {
          $('.wx-logo').fadeOut(500);
        })
    }

    //  顶部轮播
    function initSlide() {
        var picList = [{
          picture: __uri('images/home/banner1.png'),
          title: '招客猫，新零售',
          desc: '颠覆传统零售，线上线下齐头并进<br/>20万+商店的共同选择',
          link:{
            text: '立即试用',
            href: 'https://merchant.zhaokemall.com/'
          }
        }, {
          picture: __uri('images/home/banner2.png'),
          title: '招客猫，您的招财猫',
          desc: '让天下没有难做的生意',
          link: {
            text: '立即试用',
            href: 'https://merchant.zhaokemall.com/'
          }
        }, {
          picture: __uri('images/home/banner3.png'),
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
        icon: __uri('images/home/icon-car.svg'),
        icon1: __uri('images/home/icon-car1.svg'),
        text: '车行',
      }, {
        icon: __uri('images/home/icon-entertain.svg'),
        icon1: __uri('images/home/icon-entertain1.svg'),
        text: '娱乐',
      }, {
        icon: __uri('images/home/icon-beauty.svg'),
        icon1: __uri('images/home/icon-beauty1.svg'),
        text: '美业',
      }, {
        icon: __uri('images/home/icon-food.svg'),
        icon1: __uri('images/home/icon-food1.svg'),
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
            icon: __uri('images/home/icon-car.svg'),
            icon1: __uri('images/home/icon-car1.svg'),
          }, {
            icon: __uri('images/home/icon-entertain.svg'),
            icon1: __uri('images/home/icon-entertain1.svg'),
          }, {
            icon: __uri('images/home/icon-beauty.svg'),
            icon1: __uri('images/home/icon-beauty1.svg'),
          }, {
            icon: __uri('images/home/icon-food.svg'),
            icon1: __uri('images/home/icon-food1.svg'),
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
            picUrl1: __uri('images/home/tab1(1).png'),
            picUrl3: __uri('images/home/tab1(3).png'),
          }, {
            picUrl1: __uri('images/home/tab2(1).png'),
            picUrl3: __uri('images/home/tab2(3).png'),
          }, {
            picUrl1: __uri('images/home/tab3(1).png'),
            picUrl3: __uri('images/home/tab3(3).png'),
          }, {
            picUrl1: __uri('images/home/tab4(1).png'),
            picUrl3: __uri('images/home/tab4(3).png'),
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
