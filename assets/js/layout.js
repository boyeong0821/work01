$('#langBtn').click(function(){
    url = $('#langList').val();
    window.open(url);
});


$(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > 0) {
        $('.fix-menu').addClass('show');
    } else {
        $('.fix-menu').removeClass('show');
    }
});

$('.fix-menu .btn-top').click(function() {
    $('html,body').animate({
        scrollTop: 0
    },300);
});