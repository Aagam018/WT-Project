$(document).ready(function () {

    $(window).scroll(function () {
        var sticky = $('.site-header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('.mobile-menu').click(function () {
        $('body').toggleClass('open-menu')
    });

    $(window).scroll(function () {
        var sticky = $('.scroll-top'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) sticky.addClass('fixed-scroll');
        else sticky.removeClass('fixed-scroll');
    });

    (function () {
        var words = [
            'ideas',
            'design'
        ], i = 0;
        setInterval(function () {
            $('#changingword').fadeOut(function () {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();
    (function () {
        var words = [
            'idea.',
            'stuff.'
        ], i = 0;
        setInterval(function () {
            $('#changingword2').fadeOut(function () {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();
    (function () {
        var words = [
            'ideal',
            'great'
        ], i = 0;
        setInterval(function () {
            $('#changingword3').fadeOut(function () {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();
    (function () {
        var words = [
            'Creative Idea',
            'Robust Design'
        ], i = 0;
        setInterval(function () {
            $('#changingword4').fadeOut(function () {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();
    (function () {
        var words = [
            'developed',
            'designed'
        ], i = 0;
        setInterval(function () {
            $('#changingword5').fadeOut(function () {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();
    (function () {
        var words = [
            'recent news',
            'latest blogs'
        ], i = 0;
        setInterval(function () {
            $('#changingword6').fadeOut(function () {
                $(this).html(words[i = (i + 1) % words.length]).fadeIn();
            });
        }, 2000);

    })();

    $('.client-slider').owlCarousel({
        item: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.brand-slider').owlCarousel({
        item: 4,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    // AOS.init( {
    //     once: true,
    //     duration: 1500,
    // });

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {

        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;

            const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
            sectionId = current.getAttribute("id");

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ) {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }

});