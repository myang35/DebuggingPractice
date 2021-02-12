$(document).ready(function() {
    // get data from update.json
    var updateElement = $("#update-data");
    $.ajax({
        type: "get",
        url: "update.json",
        beforeSend: function() {
            updateElement.html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            updateElement.html("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            updateElement.html("");
            $.each(data, function() {
                var counter = 0;
                $.each(this, function(key, value) {
                    var html = "";
                    // Get latest 5 updates
                    if (counter < 5) {
                        var idName = "update-data-" + counter;
                        // Display data
                        html +=
                            "<div id=" + idName + ">" +
                            "Date: " + value.date + "<br>" +
                            "Summary: " + value.summary + "<br>" +
                            "Details: <br><ul>";
                        $.each(value.details, function () {
                            html += "<li>" + this + "</li>";
                        });
                        html += "</ul></div><br>";
                        updateElement.append(html);
                        var idReference = "#" + idName;
                        // Set background color of every other update information
                        if (counter % 2 == 1) {
                            $(idReference).addClass("background-color-change");
                        }
                        $(idReference).addClass("data-format");
                    }
                    counter++;
                });
            });
        }
    });

    // get data from another website
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "format=json&jsoncallback=?&id=162355851@N07&tags=logo"; // tutorial links
    $.ajax({
        type: "get",
        url: url,
        beforeSend: function() {
            updateElement.html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            updateElement.html("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            let html = "<h1>Online Tutorials:</h1>";
            // Display data
            $.each(data.items, function(i, item) {
                html += "<img src=" + item.media.m + " class='hoverOut'>";
            });
            $("#tutorial-links").html(html);

            // First image links to codecademy
            $("#tutorial-links img:nth-child(2)").click(function() {
                window.location = "https://www.codecademy.com/learn/learn-python-3";
            });
            // Second image links to w3schools
            $("#tutorial-links img:nth-child(3)").click(function() {
                window.location = "https://www.w3schools.com/python/";
            });

            // Add hover effect over images
            $("#tutorial-links img").hover(
                function() {
                    $(this).addClass("hoverIn");
                    $(this).removeClass("hoverOut");
                }, function() {
                    $(this).addClass("hoverOut");
                    $(this).removeClass("hoverIn");
                }
            );
        }
    });

    url = "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "format=json&jsoncallback=?&id=162355851@N07&tags=book"; // book links
    $.ajax({
        type: "get",
        url: url,
        beforeSend: function() {
            updateElement.html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            updateElement.html("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            let html = "<h1>Books:</h1>";
            // Display data
            $.each(data.items, function(i, item) {
                html += "<img src=" + item.media.m + " class='hoverOut'>";
            });
            $("#book-links").html(html);

            // First image links to Murach's Python Programming
            $("#book-links img:nth-child(2)").click(function() {
                window.location = "https://www.amazon.com/s/ref=nb_sb_ss_c_1_16?url=search-alias%3Daps&field-keywords=murach%27s+python+programming&sprefix=murach%27s+python+%2Caps%2C140&crid=22WPSRLPVV148";
            });
            // Second image links to Head First Python
            $("#book-links img:nth-child(3)").click(function() {
                window.location = "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=head+first+python";
            });

            // Add hover effect over images
            $("#book-links img").hover(
                function() {
                    $(this).addClass("hoverIn");
                    $(this).removeClass("hoverOut");
                }, function() {
                    $(this).addClass("hoverOut");
                    $(this).removeClass("hoverIn");
                }
            );
        }
    });
});