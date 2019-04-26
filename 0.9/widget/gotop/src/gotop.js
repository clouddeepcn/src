define(function(require, exports, module) {
    require('./ui.smooth-scroll');
    var $ = window.Zepto;

    var UI = $.AMUI;

    var goTopInit = function() {
            $('.am-gotop').find('a').on('click', function(e) {
                e.preventDefault();
                $('body').smoothScroll(0);
            });
        };

    $(function() {
        goTopInit();
	});

    exports.init = goTopInit;
});
