var main = function () {
    "use strict";

    var greetings = ["Good morning", "Good evening", "Goodnight", "Goodnight", "Goodnight", "What's new", "Greetings", "Hello", "Welcome", "Good afternoon", "Salutations", "Good morning", "Goodnight", "Good evening"];
    var cities = ["Berlin", "Madrid", "Vienna", "Beijing", "Tel Aviv", "Houston", "Manchester", "Amsterdam", "Paris", "Tokyo", "Frankfurt", "London", "Brussels", "Paris", "Kuala Lumpur", "New Delhi", "Jakarta", "Athens", "Rome", "Dublin", "Shanghai", "Warsaw", "Vienna", "Berlin", "New York", "Dallas", "Bordeaux", "Johannesburg", "Lima", "Buenos Aires", "Brasilia", "Rio", "Vienna", "Vienna", "Vienna", "Vienna"];

    $("div").on("click", function (event) {

        var randomGreeting = Math.floor(Math.random() * greetings.length);
        var randomCity = Math.floor(Math.random() * cities.length);

        if (greetings[randomGreeting] === "Goodnight" && cities[randomCity] === "Vienna") {
            $("body").attr("class", "black");
            $("h1").attr("class", "white");
        } else {
            $("body").removeClass("black");
            $("h1").removeClass("white");
        }

        $("#greeting").text(greetings[randomGreeting]);
        $("#city").text(cities[randomCity]);
    });
    
};

$(document).ready(main);