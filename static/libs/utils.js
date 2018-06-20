define('libs/utils', function(require, exports, module) {

  var router = require('libs/router');
  var utils = {
      pageNo: 1,
      //分页条数
      pageSize: 10,
      /**
       * 请求方法
       * @param {string} url 请求的url
       * @param {json} params 传入的参数
       * @param {function} callBack 回调方法
       * @param {Boolean} isJson 是否为json数据，true为是，false为否
       * @param {Boolean} noLoading 是否不显示默认的loading界面，true为不显示
       * @param {function} completeCallback 回调方法，可空
       * @param {function} errorCallback 回调方法，可空
       * **/
      postData: function(url, params, callBack, isJson, noLoading, completeCallback, errorCallback) {
          $.ajax({
              url: url,
              data: isJson == false ? params : JSON.stringify(params),
              type: 'POST',
              dataType: 'json',
              contentType: isJson == true ? 'application/json;charset=utf-8' : 'application/x-www-form-urlencoded;charset=utf-8',
              // beforeSend: function() {
              // 	if(noLoading != true) {
              // 		$('body').append("<span class='loading-gif' id='loading-gif'><img src='src/images/loading.gif' /></span>");
              // 	}
              // },
              success: function(r) {
                  if (r.code === "1000" || r.code === "1010") {
                      if(window._currentUser){
                          var call = function(){
                              window._currentUser = undefined;
                              utils.initLoginMsg();
                              location.href = "#";
                              utils.showLogin();
                          }
                          utils.alertCallback(window.lang.tips[101],call);
                      }
                  } else if (r.code === "0") {
                      callBack(r);
                  } else {
                      if (errorCallback != null && typeof errorCallback == "function") {
                          errorCallback(r);
                      } else {
                          utils.alert(r.message);
                      }
                  }
              },
              complete: function() {
                  if (noLoading != true) {
                      $(".loading-gif").remove();
                  }
                  if (completeCallback != null && typeof completeCallback == "function") {
                      completeCallback();
                  }
              },
              error: function(XMLHttpRequest) {
                  console.log(XMLHttpRequest);
                  if (errorCallback != null && typeof errorCallback == "function") {
                      var r = {};
                      r.code = "-1";
                      r.message = window.lang.tips[000];
                      errorCallback(r);
                  }
              }
          });
      },
      getData: function(url, callback, noLoading, completeCallback, errorCallback) {
          $.ajax({
              url: url,
              type: 'GET',
              success: function(r) {
                  if (url == urls.getCunrrent || r.code === "0") {
                      callback(r);
                  }else{
                      if (errorCallback != null && typeof errorCallback == "function") {
                          errorCallback(r);
                      }else if(r.code === "1000" || r.code === "1010"){
                          if(window._currentUser){
                              var call = function(){
                                  window._currentUser = undefined;
                                  utils.initLoginMsg();
                                  location.href = "#";
                                  utils.showLogin();
                              }
                              utils.alertCallback(window.lang.tips[101],call);
                          }
                      }else {
                          utils.alert(r.message);
                      }
                  }
              },
              complete: function() {
                  if (noLoading != true) {
                      $(".loading-gif").remove();
                  }
                  if (completeCallback != null && typeof completeCallback == "function") {
                      completeCallback();
                  }
              },
              error: function(XMLHttpRequest) {
                  console.log(XMLHttpRequest);
                  if (errorCallback != null && typeof errorCallback == "function") {
                      var r = {};
                      r.code = "-1";
                      r.message = window.lang.tips[000];
                      errorCallback(r);
                  }
              }
          });
      },
      initPage: function() {
          var AppView = Backbone.View.extend({
              el: $('body'),
              initialize: function() {
                  this.render();
              },
              render: function() {
                  var self = this;
                  // 头部导航栏数据
                  var data = {};
                  // self.hashChange();
                  Backbone.history.start();
                  self.initHeader();
                  self.menuEvent();
                  // self.initFooter();
                  $(window).on('hashchange', function() {
                      // 锚点变化
                      self.hashChange();
                  });
              },
              events: {
              },
              hashChange: function() {
                window.location.reload();
                $(window).scrollTop(0);
              },
              initHeader: function() {
                var headerData = {
                  product: {
                    title: '产品',
                    list: [{
                      name: '招客猫微商城',
                      desc: '低门槛商店,提高您的质量',
                      href: '#/product/mall',
                      icon: '/images/product-icon(1).svg'
                    }, {
                      name: '招客猫收银',
                      desc: '多种收银方式',
                      href: '#/product/cashier',
                      icon: '/images/product-icon(2).svg'
                    }, {
                      name: '招客猫新零售',
                      desc: '线上线下两不误',
                      href: '#/product/model',
                      icon: '/images/product-icon(3).svg'
                    }]
                  },
                  service: {
                    title: '服务',
                    list:[{
                      name: '小程序',
                      desc: '一键打通小程序，开拓您的新业务',
                      href: '#/service/program',
                      icon: '/images/service-icon(1).svg'
                    }, {
                      name: '定制服务',
                      desc: '店铺装修,营销方案支持私人定制',
                      href: '#/service/service',
                      icon: '/images/service-icon(2).svg'
                    }, {
                      name: '广告投放 (暂未开放，敬请期待)',
                      desc: '链接优质流量,精准营销',
                      href: '',
                      icon: '/images/service-icon(3).svg'
                    }
                  ]
                  }
                };
                $('#top-header').html(_.template("<div class=\"header-content\">\r\n  <div class=\"header-wrap\">\r\n    <div class=\"header-left flex\">\r\n      <span class=\"header-logo\">\r\n        <a href=\"#/home\" >\r\n          <img src=\"/images/logo.svg\"/>\r\n        </a>\r\n      </span>\r\n      <span class=\"header-nav\">\r\n        <ul class=\"nav-list\">\r\n          <li class=\"nav-list-li\"><a class=\"menu-a\" href=\"#/home\" >首页</a></li>\r\n          <li class=\"nav-list-li\"><a class=\"menu-a\">产品与服务\r\n            <!-- <span class=\"vicon\">∨</span> -->\r\n          </a>\r\n            <div class=\"nav-wrap\">\r\n              <div class=\"nav-small-wrap\">\r\n                <div class=\"nav-item\">\r\n                  <p><%= product.title %></p>\r\n                  <ul class=\"nav-item-ul\">\r\n                    <% _.each(product.list, function(item) {%>\r\n                    <li class=\"nav-item-li\"><a href=\"<%= item.href %>\">\r\n                        <span class=\"icon-header\">\r\n                          <img src=\"<%= item.icon %>\" />\r\n                        </span>\r\n                        <span class=\"intro-header\">\r\n                          <p class=\"name\"><%= item.name %></p>\r\n                          <p class=\"desc\"><%= item.desc %></p>\r\n                        </span>\r\n                    </a></li>\r\n                    <% }) %>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"nav-item\">\r\n                  <p><%= service.title %></p>\r\n                  <ul class=\"nav-item-ul\">\r\n                    <% _.each(service.list, function(item) {%>\r\n                    <li class=\"nav-item-li\"><a href=\"<%= item.href %>\">\r\n                        <span class=\"icon-header\">\r\n                          <img src=\"<%= item.icon %>\" />\r\n                        </span>\r\n                        <span class=\"intro-header\">\r\n                          <p class=\"name\"><%= item.name %></p>\r\n                          <p class=\"desc\"><%= item.desc %></p>\r\n                        </span>\r\n                    </a></li>\r\n                    <% }) %>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-list-li\"><a  class=\"menu-a\" href=\"#/support/instruction\">帮助中心</a></li>\r\n          <!--<li class=\"nav-list-li\"><a  class=\"menu-a\">关于我们</a></li> -->\r\n        </ul>\r\n      </span>\r\n    </div>\r\n    <div class=\"header-right\">\r\n      <a class=\"right-item\" target=\"_blank\" href=\"https://merchant.zhaokemall.com\">商家登录</a>\r\n      <a class=\"right-item\" target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=3564634648&site=qq&menu=yes\">联系客服</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n", headerData));
              },
              menuEvent: function() {
                $('.nav-list-li').hover(function(){
                  var hasClass = $(this).children('.menu-a').hasClass('active');
                  if(hasClass) {
                    $(this).children('.menu-a').removeClass('active');
                  } else {
                    $(this).children('.menu-a').addClass('active');
                  }
                  $(this).children('.nav-wrap').stop(true, false).slideToggle(500);
                })
                $('.nav-item-li').click(function(){
                  refresh($(this));
                })
                $('.nav-list-li').click(function(){
                  refresh($(this));
                })
                $('.header-logo').click(function(){
                  refresh($(this));
                })
                function refresh(that) {
                  var hashValue = that.children('a')[0].hash;
                  var localHash = location.hash;
                  if(hashValue == localHash) {
                    window.location.reload();
                    $(window).scrollTop(0);
                  }
                }
              },
          });
          var appView = new AppView();
      },
      //文件上传
      fileUpload: function(id, callBack,type,errorCallback,progressHandlingFunction) {
          var url = "";
          if(type){
              url = urls.upload+"?fileType="+type;
          }else{
              url = urls.upload;
          }
          var form = $("#" + id)[0];
          var formData = new FormData(form);
          $.ajax({
              url: url,
              type: "POST",
              cache: false,
              data: formData,
              processData: false,
              contentType: false,
              xhr: function(){
                  myXhr = $.ajaxSettings.xhr();
                  if(myXhr.upload){ //检查upload属性是否存在
                      //绑定progress事件的回调函数
                      myXhr.upload.addEventListener('progress',progressHandlingFunction, false);
                  }
                  return myXhr;
              },
              success: function(r) {
                  if (r.code === "0003") {
                      utils.handleNotLogin();
                  } else if (r.code === "0") {
                      callBack(r);
                  } else {
                      errorCallback(r);
                  }
              },
              error: function(r) {
                  errorCallback(r);
              }
          });
      },
      /**
       * 获取url中的字段
       * @params {name} string 获取字段的名字
       * return {context} 返回获取的字段
       * **/
      getQueryString: function(name) {
          var url = utils.getNowUrlRouter();
          if (!url) return;
          var urlSplit = url.split('/');
          var hashSplit = location.hash.substr(2).split('/');
          var value = null;
          for (var i = urlSplit.length; i--;) {
              var floor = urlSplit[i];
              if (floor == ':' + name || floor == '*:' + name) {
                  value = hashSplit[i];
                  break;
              }
          }
          return value == '-' ? "" : value;
      },
      // 获取当前路径在router里原来的模式
      getNowUrlRouter: function() {
          var _split = location.hash.substr(2).split('/');
          if (_split[0] == '') {
              _split[0] = 'home';
          }
          var routes = router.routesMap[_split[0]];
          var _mainSplit = _split.slice(1);
          var _main = _mainSplit.join('/') + '/';
          for (var url in routes) {
              if (url == '') {
                  if (_main == '/') return _split[0];
                  continue;
              }
              var urlSplit = utils.removeHeadTailEmptyStr(url.split('/'));
              // 过滤掉层数不同的
              if (_mainSplit.length !== urlSplit.length) continue;
              var reg = new RegExp((url + '/').replace(/\*?:.*?\//g, '.*?\/'));
              // 当router为'/:param1/:param2'时, 不加/会匹配不了
              if (reg.test(_main) || reg.test('/' + _main)) {
                  return (_split[0] + '/' + url);
              }
          }
      },
      // 去除数组头尾的空字符串, 仅限头尾
      removeHeadTailEmptyStr: function(arr) {
          if (arr[0] == '') arr = arr.slice(1);
          if (arr[arr.length-1] == '') arr = arr.slice(0, arr.length-1);
          return arr;
      },
      /**
       *对弹出框进行进一步的封装
       */
      alert: function(tips, tipTitle) {
          var titleText = tipTitle ? tipTitle : window.lang.tipsText;
          $.dialog({
              type: 'alert',
              showTitle: true,
              titleText: titleText,
              contentHtml: '<p>' + tips + '</p>',
              buttonText : {
                  ok: window.lang.btn.confirm,
                  cancel: window.lang.btn.cancel
              }
          });
      },
      alertTurn: function(tips, url,tipTitle) {
          var titleText = tipTitle ? tipTitle : window.lang.tipsText;
          $.dialog({
              type: 'alert',
              showTitle: true,
              titleText: titleText,
              contentHtml: '<p>' + tips + '</p>',
              buttonText : {
                  ok: window.lang.btn.confirm,
                  cancel: window.lang.btn.cancel
              },
              onClickOk: function() {
                  location.href = url;
              }
          });
      },
      alertCallback: function(tips,callback,tipTitle){
          var titleText = tipTitle ? tipTitle : window.lang.tipsText;
          $.dialog({
              type: 'alert',
              showTitle: true,
              titleText: titleText,
              contentHtml: '<p>' + tips + '</p>',
              buttonText : {
                  ok: window.lang.btn.confirm,
                  cancel: window.lang.btn.cancel
              },
              onClickOk: function() {
                  callback();
              },
              onClickCancel: function(){
                  callback();
              }
          });
      },
      removeSpace: function(str) {
          return str.replace(/(^\s*)|(\s*$)/g, '');
      },
      /*
       * 封装确认框
       */
      confirm: function(tips, callback,tipTitle) {
          var titleText = tipTitle ? tipTitle : window.lang.tipsText;
          $.dialog({
              type: 'confirm',
              showTitle: true,
              titleText: titleText,
              contentHtml: '<p>' + tips + '</p>',
              buttonText : {
                  ok: window.lang.btn.confirm,
                  cancel: window.lang.btn.cancel
              },
              onClickOk: callback
          });
      },
      // 将 字符串格式的日期 转化为指定格式的String
      // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
      // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
      // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
      formatDate: function(str, fmt) { //author: meizz
          var time,newTime,date,isDay,isMonth;
          var timeList = [];
          fmt = fmt || 'yyyy-MM-dd';
          if(fmt == "yyyy-MM-dd"){
              time = str.replace(/-/g, "/");
              timeList = time.split("/");
              timeList[0] = timeList[0].substring(0,4);
              if(timeList.length==2){
                  isDay = true;
                  timeList.push("01");
              }else if(timeList.length==1){
                  isMonth = true;
                  for (var i = 2; i--;) {
                      timeList.push("01");
                  }
              }
              newTime = timeList.join("/");
              date = new Date(newTime);
          }else{
              date = new Date(str.replace(/-/g, "/"));
          }
  
          var o = {
              "M+": date.getMonth() + 1, //月份
              "d+": date.getDate(), //日
              "h+": date.getHours(), //小时
              "m+": date.getMinutes(), //分
              "s+": date.getSeconds(), //秒
              "q+": Math.floor((date.getMonth() + 3) / 3), //季度
              "S": date.getMilliseconds() //毫秒
          };
          if (/(y+)/.test(fmt))
              fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o)
              if (new RegExp("(" + k + ")").test(fmt))
                  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          if(isDay){
              fmt = fmt.substring(0,7);
          }
          if(isMonth){
              fmt = fmt.substring(0,4);
          }
          return fmt;
      },
      changeCreatTime: function(time){
          var newTime = "";
          var timeArr = time.substring(2,10).split("-");
          $.each(timeArr,function(index,item){
              newTime += item;
          })
          return newTime;
      },
      isEmptyObject: function(obj) {
          for (var key in obj) {
              return false;
          }
          return true;
      },
      /*
       * 传入ID, 为该input或textarea添加检测输入事件
       * @param onTextInput: 检测到变化后触发的事件
       */
      inputCheck: function(id, onTextInput) {
          var obj = document.getElementById(id);
          if (document.addEventListener) {
  
              // 非Internet Explorer和Internet Explorer9之后的版本
              obj.addEventListener("input", onTextInput, false);
  
              // Google Chrome 和 Safari
              obj.addEventListener("textinput", onTextInput, false);
          }
          if (document.attachEvent) {
  
              // Internet Explorer 和 Opera
              obj.attachEvent("onpropertychange", onTextInput);
          }
      },
      /**
       * 页码
       * @params {totalNum} 总条数
       * @params {pageIndex} 初始为第几页，默认0为第1页
       * @params {pageSize} 每页显示的条数
       * @params {pageCallback} 点击页数后执行的方法
       * @params {eleId} 需要初始化分页插件的元素选择器
       * **/
      pageFun: function(totalNum, pageIndex, pageSize, pageCallback, ele) {
          var lang = window.lang.pagination;
          ele = ele || "#pagination";
          $(ele).pagination(totalNum, {
              prev_text: lang.prev,
              next_text: lang.next,
              first_text: lang.first,
              last_text: lang.last,
              current_page: pageIndex,
              ellipse_text: "...",
              num_edge_entries: 2,
              num_display_entries: 5,
              items_per_page: pageSize,
              callback: pageCallback,
              page_size_show: false,
              link_to: "javascript:void(0);"
          });
      },
      /**
       * 不能算公用方法的上传图片方式,写的非常死,插件跟html结构也是定好的,
       * @param  {[type]} ele             上传图片的那个type=file的input元素
       * @param  {[type]} saveObj         存放图片的对象
       * @param  {[type]} cb              上传图片后需要添加的回调函数 我想用promise啊爸爸
       * @param  {[type]} isNeedShowPic    上传图片后是否需要在上传框内显示上传后的图片, 默认为是
       */
      uploadPic: function(ele, saveObj, cb, isNeedShowPic) {
          var langTips = window.lang.tips;
          var self = ele;
          var parentId = $(self).parent()[0].id;
          var iconId = parentId + '-icon';
          var img = $(self).siblings('img')[0];
          var span = $(self).siblings('span')[0];
          isNeedShowPic = isNeedShowPic == null ? true : isNeedShowPic;
  
          lrz(self.files[0])
              .then(function(rst) {
                  var url = urls.uploadPic;
                  var data = {};
                  var dataPost = {
                      data: data
                  };
                  if(rst.fileLen<=5242880){
                      data.fileName = rst.origin.name;
                      data.fileType = 'image';
                      data.base64File = rst.base64.substring(rst.base64.indexOf(',') + 1);
  
                      var callback = function(r) {
                          var picUrl = r.data.url;
                          var picName = r.data.name;
                          var obj = {
                                  fileUrl : picUrl,
                                  fileName : picName
                              };
                          saveObj[parentId] = obj;
  
                          if (isNeedShowPic) {
                              var closeIcon = $(self).siblings('.icon-close')[0];
                              img.setAttribute("src", urls.download + '?fileUrl=' +
                                               encodeURIComponent(picUrl) + '&fileName=' + encodeURIComponent(picName));
                              $(img).addClass('show');
                              $(img).show();
                              $(closeIcon).show();
                              $(closeIcon).on('click', function() {
                                  utils.removeImg(this, saveObj);
                              });
                          }
                          if (typeof cb === 'function') {
                              cb(parentId);
                          }
                      };
                      utils.postData(url, dataPost, callback, true, true);
                  }else{
                      utils.alert(langTips[529])
                  }
  
              })
              .catch(function(err) {
                  // 处理失败会执行
                  utils.alert(langTips[530]);
              })
              .always(function() {
                  // 不管是成功失败，都会执行
              });
      },
      /*
       * 发布列表中上传图片上的icon-close的点击事件
       * @param iconEle 该icon元素
       * @param obj 储存图片的对象
       */
      removeImg : function(iconEle, obj) {
          utils.confirm(window.lang.tips[531],function(){
              var file = $(iconEle).siblings('.uploadPic')[0];
              var img = $(iconEle).siblings('img')[0];
              var parentId = $(iconEle).parent()[0].id;
  
              delete obj[parentId];
              $(file).val('');
              $(img).hide();
              $(iconEle).hide();
          })
      },
      // 把图片的obj转换成下载地址
      changePicSrcToDownload: function(picObj) {
          return (urls.download + '?fileUrl=' + encodeURIComponent(picObj.fileUrl) + '&fileName=' + encodeURIComponent(picObj.fileName));
      },
      /**
       * 公用处理点击发送验证码按钮的回调函数
       * @param  {elementObject} ele 该按钮的元素对象, 不需要用jq进行封装
       * @param  {object} obj 传入存放倒计时时间等信息的对象, 格式{time: `最大倒计时时间`}
       */
      commonCallbackForCodeBtn: function(ele, obj) {
          var time = obj.time;
          var eleObj = $(ele);
          if (time == 0) {
              clearTimeout(obj.timer);
              obj.time = 60;
              eleObj.addClass("active");
              eleObj.text(window.lang.btn.resend);
              eleObj.removeAttr("disabled");
          } else {
              eleObj.removeClass("active");
              eleObj.text("" + time + "s");
              obj.time = time - 1;
              obj.timer = setTimeout(function() {
                  utils.commonCallbackForCodeBtn(ele, obj);
              }, 1000);
          }
      },
  };
  
  module.exports = utils;
  

});
