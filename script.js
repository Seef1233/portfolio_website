$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });
// toggle menu/navbar script
    $('.menu-btn').click(function() {
        var element = document.getElementById("mobile-menu");
        if (element.style.visibility === "visible") {
            element.style.visibility = "hidden";  // Hide the element
        } else {
            element.style.visibility = "visible"; // Show the element
        }
    });

});
