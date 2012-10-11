// Project: LightBox
// Version: v1.1
// Author: Boris Damevin
// Release Date: 11/10/2012
//
// Description: LightBox
// jQuery: 1.8.2
//

(function($){
    $.fn.LightBox = function(opts){

        // Defaults options
        var defaults = {
            speed: 500
        };

        var param = $.extend(defaults, opts);

        return this.each(function(){

            var centerElem = $(this);

            var windowHeight = $(window).height(); // The actual window height
            var windowWidth = $(window).width(); // The actual window width
            var elementHeight = $(centerElem).height();  // The element height
            var elementWidth = $(centerElem).width(); // The element width

            $(centerElem).css({
                "top":  ((windowHeight / 2) - (elementHeight / 2)),
                "left": ((windowWidth / 2) - (elementWidth / 2))
            });

            // Keep center with the window resize
            window.onresize = alignResize;
            function alignResize(){
                $(centerElem).css({
                    "top":  (($(window).height() / 2) - (elementHeight / 2)),
                    "left": (($(window).width() / 2) - (elementWidth / 2))
                });
            }

            // The close button function
            $(".lightbox .close").click(function(){
                $(".lightbox").fadeOut(param.speed);
            });

        });

    };
})(jQuery);