$(document).ready(function() {
    $('.roboty__slider-up').slick({
        arrows: false,
        fade: true,
        asNavFor: ".roboty__slider-down"
    });
});

$(document).ready(function() {
    $('.roboty__slider-down').slick({
        centerMode: true,
        slidesToShow: 3,
        asNavFor: ".roboty__slider-up"
    });

});
$(document).ready(function() {
    $('.contact__slider').slick({
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });
});
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('.button[filter="kv"]').click(function() {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.filter > div').hide(300);
        $('.filter > div[filter="kv"]').show(300);
    }
});

$(document).ready(function() {

    var headerHeight = $('header').outerHeight(); // Target your header navigation here

    $('#menu__nav li a').click(function(e) { // #menu__nav   

        var targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
        }, 1000);

        e.preventDefault();
    });
});


/**
$('.button[filter="bud"]').click(function() {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.filter > div').hide(300);
        $('.filter > div[filter="bud"]').show(300);
    }
});
$('.button[filter="com"]').click(function() {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.filter > div').hide(300);
        $('.filter > div[filter="com"]').show(300);
    }
});
$('.button[filter="all"]').click(function() {
    if ($(this).attr('val') == 'off') {
        $('.button[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.filter > div').show(300);
    }
});**/