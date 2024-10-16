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
        $(this).find('.description').stop(true, true).fadeIn(300); //looks for child element of the class description and stops any ongoing animations 
    }).on('mouseleave', function () {
        $(this).find('.description').stop(true, true).fadeOut(300);
    });
});


$(document).ready(function() {
    $('.event-heading').on('click', function() {
        // Get the target ID from the button's data attribute
        var targetId = $(this).data('target');
        
        //finds the element with the ID that matches the targetID, and it toggles its visibility
        $('#' + targetId).slideToggle();
    });
});

