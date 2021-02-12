$(document).ready(function() {
    // accordion
    $("#learn-accordion").accordion({
        event: "click",
        heightStyle: "content",
        collapsible: true
    });
    // tooltip
    $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 bottom+5",
            collision: "none"
        }
    });
    // validate
    $("#feedback-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            feedback: {
                required: true
            }
        },
        messages: {
            email: "*Required",
            feedback: "*Required"
        }
    });
});
