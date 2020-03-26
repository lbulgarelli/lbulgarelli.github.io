nav_height = $(".navbar").outerHeight();
me_height = $("#photo-me").outerHeight();

$(window).scroll(function(e) {
    $(".navbar").css("height", nav_height - $(window).scrollTop());
    $("#photo-me").css("height", me_height - $(window).scrollTop());
});