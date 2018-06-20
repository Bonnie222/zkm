define('libs/urls', function(require, exports, module) {

  var url = "/api/";
  var urls = {
      login: url + 'member/login',
      logout: url + 'member/logout',
  };
  
  module.exports = urls;
  

});
