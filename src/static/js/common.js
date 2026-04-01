$(window).on('scroll', function () {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() > 1) {
        $header.addClass('scroll-nav');
    } else {
        $header.removeClass('scroll-nav');
    }
});


jQuery(document).ready(function ($) {
    let started = false;

    function startCounter() {
        const section = $('.about-number');

        if (!section.length) return;

        const sectionTop = section.offset().top;
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();

        if (!started && scrollTop + windowHeight > sectionTop + 50) {
            started = true;

            $('.about-number__item span').each(function () {
                const $this = $(this);
                const target = parseInt($this.attr('data-number'));
                const originalText = $this.text();

                let suffix = '';
                if (originalText.includes('++')) {
                    suffix = '++';
                } else if (originalText.includes('+')) {
                    suffix = '+';
                }

                $({ countNum: 0 }).animate(
                    { countNum: target },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum) + suffix);
                        },
                        complete: function () {
                            $this.text(target + suffix);
                        }
                    }
                );
            });
        }
    }

    $(window).on('scroll load', startCounter);
});

jQuery(document).ready(function ($) {
    const $slider = $('.reviews-slider');
    const $progress = $('.reviews-progress span');

    $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
        const i = (currentSlide ? currentSlide : 0) + 1;
        const calc = (i / slick.slideCount) * 100;

        $progress.css('width', calc + '%');
    });

    $slider.slick({
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        prevArrow: $('.reviews .arrow-prev'),
        nextArrow: $('.reviews .arrow-next'),
        dots: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

function popupOpen() {
    var $popupButton = $('.btn-popup');
    $popupButton.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var popupButtonData = $this.data('popup');
        if($this.data('video-link')){
            $('.popup video').attr('src', $this.data('video-link'))
            $('.popup').removeClass('active');
            $('div[data-popup = '+popupButtonData+']').addClass('active');
            $('body').addClass('is-scroll');
        }else{
            $('.popup').removeClass('active');
            $('div[data-popup = '+popupButtonData+']').addClass('active');
            $('body').addClass('is-scroll');
        }

    });

}

popupOpen();
$('.clock-item').on('click', function (e){
    $('div[data-popup ="call" ]').addClass('active');
})
$('.popup-close').on('click', function (e) {
    var $this = $(this);
    $('.popup').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('body').removeClass('is-scroll');
    console.log('dss');
});
$('.popup-overlay').on('click', function (e) {
    var $this = $(this);
    $this.removeClass('active');
    $('.popup').removeClass('active');
    $('body').removeClass('is-scroll');
});
// $('.header a').on('click', function (e) {
//     e.preventDefault();
//     const targetClass = $(this).attr('data-nav');
//     const $headerHeight = $('.header').height;
//     const $target = $('#' + targetClass);
//     if ($target.length) {
//         $('html, body').animate({
//             scrollTop: $target.offset().top - 70
//         }, 600);
//     }
//
//     $('.header-btn').removeClass('active');
//     $('.header').removeClass('active');
//     $('body').removeClass('is-scroll');
// });
$('.header-btn').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('body').toggleClass('is-scroll');
});
$('.accordion-item__title').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.accordion-item');
    if ($parent.hasClass('active')) {
        $parent.removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');
        $parent.addClass('active');
    }
});
$('.faq-item__title').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.faq-item');
    if ($parent.hasClass('active')) {
        $parent.removeClass('active');
    } else {
        $('.faq-item').removeClass('active');
        $parent.addClass('active');
    }
});
$('.service-item').on('click', function () {
    const $this = $(this);
    $('.service-item').removeClass('active');
    $this.toggleClass('active');
});
$('.taxation-item__title').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.taxation-item');
    if ($parent.hasClass('active')) {
        $parent.removeClass('active');
    } else {
        $('.taxation-item__title').removeClass('active');
        $parent.addClass('active');
    }
});

$('.filter-item__title').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.filter-item');
    $parent.toggleClass('active');
});
$('.sort-list__title').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.sort-list');
    $parent.toggleClass('active');
});
$('.header-lang__title, .footer-lang__title').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.header-lang, .footer-lang');
    $parent.toggleClass('active');
});
$('.header-lang li, .footer-lang li').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.header-lang, .footer-lang');
    $parent.removeClass('active');
});
$('.has-sub > a').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $parent = $this.parent();
    $parent.toggleClass('active');
});
$(document).mouseup( function(e){
    var div = $( ".has-sub" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        div.removeClass('active');
    }
});
$('.menu-item-has-children > a').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $parent = $this.parent();
    $('.menu-item-has-children').removeClass('active');
    $parent.toggleClass('active');
});
$(document).mouseup( function(e){
    var div = $( ".menu-item-has-children" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
        div.removeClass('active');
    }
});
$('.sort-list li').on('click', function () {
    const $this = $(this);
    const $parent = $this.closest('.sort-list');
    $('.sort-list__title span').text($this.text());
    $parent.removeClass('active');
    $('.sort-list li').removeClass('selected');
    $this.addClass('selected');
});
$(function($) {
    $(document).mouseup(function(e) {
        var popup = $(".sort-list, .header-lang, .footer-lang");
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            popup.removeClass('active');
        }
    });
});
$('.program-tab__nav a').on('click', function (e) {
    e.preventDefault();
    const dataValue = $(this).attr('data-tab-nav');
    if ($(this).hasClass('active')) return;
    $('.program-tab__nav a').removeClass('active');
    $('.program-tab__item').removeClass('active');
    $(this).addClass('active');
    $('[data-tab="' + dataValue + '"]').addClass('active');
});
$('.tab-nav a').on('click', function (e) {
    e.preventDefault();
    const dataValue = $(this).attr('data-tab');
    if ($(this).hasClass('active')) return;
    $('.tab-nav a').removeClass('active');
    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('[data-tab="' + dataValue + '"]').addClass('active');
});


document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        disable: 'mobile',
        once: true,
    });
    requestAnimationFrame(() => AOS.refresh());
    setTimeout(() => AOS.refresh(), 200);
});