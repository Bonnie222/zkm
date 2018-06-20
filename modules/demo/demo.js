var controller = function() {
    var data = {};
    appView.html(_.template(__inline('demo.html')));
    $('.page-location').html(_.template(__inline('../../templates/page_location.html')));
};

module.exports = controller;
