window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
};
document.addEventListener("DOMContentLoaded", function() {


    $('[data-toggle="tooltip"]').tooltip()
    $('.carousel').carousel({
        /* interval: 4000 */
    })

    /* var backToMenu = document.getElementById("back2menu");

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            backToMenu.style.display = "block";
        } else {
            backToMenu.style.display = "none";
        }
    } */


    /** Filter */
    $(function() {
        var selectedClass = "";
        $(".filter").click(function() {
            selectedClass = $(this).attr("data-rel");
            $("#gallery").fadeTo(100, 0.1);
            $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
            setTimeout(function() {
                $("." + selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
            }, 300);
        });
    });

    /* 100vh */
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /* sweetScroll load */

    const scroller = new SweetScroll({ duration: 1000, easing: 'easeOutQuint' });

    /* Jarallax */
    jarallax(document.querySelectorAll('.jarallax'), {
        type: 'opacity',
        speed: 0.2
    });

});