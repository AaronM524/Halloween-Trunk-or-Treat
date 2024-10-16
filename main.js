$(document).ready(function() {
    $('.toggle-btn').on('click', function() {
        // Toggle the description visibility
        $(this).prev('.description').toggle();
        
        // Toggle the button text between 'More Info' and 'Less Info'
        if ($(this).text() === "More Info") {
            $(this).text("Less Info");
        } else {
            $(this).text("More Info");
        }
    });
});


$(document).ready(function () {
    $('.card').on('mouseenter', function () {
        $(this).find('.description').stop(true, true).fadeIn(300);
    }).on('mouseleave', function () {
        $(this).find('.description').stop(true, true).fadeOut(300);
    });
});

