const visualSlide1 = new Swiper('.sc-visual .news .visual-slide',{
    autoplay: {
        delay: 3000
    },

    loop: true,

    navigation:{
        nextEl:".next",
        prevEl:".prev"
    },

    pagination:{
        el: ".fraction",
        type: "fraction"
    }
});

const visualSlide2 = new Swiper('.sc-visual .citizen .visual-slide',{
    autoplay: {
        delay: 3000
    },

    loop: true,

    navigation:{
        nextEl:".next",
        prevEl:".prev"
    },

    pagination:{
        el: ".fraction",
        type: "fraction"
    }
});

$('.news .autoplay').click(function(){
    if ($(this).hasClass('on')) {
        visualSlide1.autoplay.start();
    } else {
        visualSlide1.autoplay.stop();
    }
    $(this).toggleClass('on');
});

$('.citizen .autoplay').click(function(){
    if ($(this).hasClass('on')) {
        visualSlide2.autoplay.start();
    } else {
        visualSlide2.autoplay.stop();
    }
    $(this).toggleClass('on');
});

$('.sc-visual .title').click(function(e){
    e.preventDefault();
    $('.sc-visual .content').removeClass('active');
    $(this).parent().addClass('active');
});


const bannerSlide = new Swiper('.sc-banner .banner-slide',{
    autoplay: {
        delay: 3000
    },

    loop: true,

    slidesPerView: 3,
    spaceBetween: 43,

    navigation:{
        nextEl:".next",
        prevEl:".prev"
    },

    pagination:{
        el: ".fraction",
        type: "fraction"
    }
});

$('.banner-slide .autoplay').click(function(){
    if ($(this).hasClass('on')) {
        bannerSlide.autoplay.start();
    } else {
        bannerSlide.autoplay.stop();
    }
    $(this).toggleClass('on');
});


$('.sc-site .title').click(function(e){
    if ($(this).siblings('.sub').length) {
        e.preventDefault();

        if ($(this).hasClass('on')) {
            $(this).removeClass('on').siblings('.sub').stop().slideUp();
        } else {
            $('.title').removeClass('on').siblings('.sub').stop().slideUp();
            $(this).addClass('on').siblings('.sub').stop().slideDown();
        }
    }
});

$('.sc-site .sub-list .sub-item').keydown(function(e){
    const code = e.keyCode;
    const $this = $(this);
    const isFirstItem = $this.is(':first-child');
    const isLastItem = $this.is(':last-child');
    const isShift = e.shiftKey;

    if (code === 9){
        if (isFirstItem && isShift){
            $('.title').removeClass('on').siblings('.sub').stop().slideUp();
        } else if (isLastItem && !isShift) {
            $('.title').removeClass('on').siblings('.sub').stop().slideUp();
        }
    }
});