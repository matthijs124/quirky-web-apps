var main = function () {
    "use strict";

    var count = 1;
    var maxCount = 5;

    $("#add").on("click", function (event) {
        if (count < 5) {
            $("#alertbox").empty();
            count++;
            console.log(count);
            $("#rightdiv").prepend("<img src='delftbox.png'>");
        } else {
            $("#alertbox").empty();
            $("#alertbox").append("<p>Stack is full!</p>");
        }
    });

    $("#remove").on("click", function (event) {
        if (count > 0) {
            $("#alertbox").empty();
            count--;
            console.log(count);
            $('#rightdiv').find("img").slice(count).remove();
        } else {
            $("#alertbox").empty();
            $("#alertbox").append("<p>Nothing left to remove!</p>");
        }
    });
};

$(document).ready(main);