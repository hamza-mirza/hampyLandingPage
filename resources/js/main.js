(function($) {
    $(document).ready(function() {

        //highlighting navbar on scroll down
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $(".navbar-default").css({
                    "background-color": "#2c3e50",
                    "transition": "0.5s all"
                });
            } else {
                $(".navbar-default").css({
                    "background-color": "transparent",
                    "transition": "0.5s all"
                });
            }
        });

        // smooth scroll

        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });

        // hightlighting navbar elements on scroll
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 100
        });

        // animating elements on scroll

        //hide elements first
        $('.about__right').css('opacity', 0);
        $('.about__left').css('opacity', 0);
        $('.feature__row').css('opacity', 0);
        $('.demo__row').css('opacity', 0);


        // add animate.css classes to animate hidden elements
        $('.about__left').waypoint(function() {
            $('.about__left').addClass('fadeInLeft');
        }, { offset: '70%' });

        $('.about__right').waypoint(function() {
            $('.about__right').addClass('fadeInUp');
        }, { offset: '70%' });

        $('.feature__row').waypoint(function() {
            $('.feature__row').addClass('fadeInUp');
        }, { offset: '50%' });

        $('.demo__row').waypoint(function() {
            $('.demo__row').addClass('fadeInLeftBig');
        }, { offset: '50%' });


        });
})(jQuery);
