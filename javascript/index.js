$(window).ready(function() {
    $(".btn").click(function() {
        $(".showtime").toggle(1000);
        var CloseBtn = $(".showtime").css("display");
        if (CloseBtn == "block") {
            $(".btn").css("display", "none");
        }
    });
    $(".showtime").click(function() {
        $(this).hide(1000);
        $(".btn").show(1000);
    });
    $(".iconmenu__mobile").click(function() {
        $(".menu__mobile").toggleClass("appear");
    });
    $(".play").click(function() {
        $(".view__right__audio").addClass("animation");
    });
});