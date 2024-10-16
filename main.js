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
