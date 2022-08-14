$(window).on("load", function() {
    $("#thumbnail img").click(function() {
        let img_src = $(this).attr("src");
        $("#slideshow-image img").attr("src", img_src);
    });
});
$(window).on("load", function() {
    $("#thumbnail02 img").click(function() {
        let img_src = $(this).attr("src");
        $("#slideshow-image02 img").attr("src", img_src);
    });
});
$(window).on("load", function() {
    $("#thumbnail03 img").click(function() {
        let img_src = $(this).attr("src");
        $("#slideshow-image03 img").attr("src", img_src);
    });
});
$(window).on("load", function() {
    $("#thumbnail04 img").click(function() {
        let img_src = $(this).attr("src");
        $("#slideshow-image04 img").attr("src", img_src);
    });
});