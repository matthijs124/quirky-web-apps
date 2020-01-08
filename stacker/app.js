var main = function () {
    "use strict";

    var count = 1;
    var maxCount = 5;

    $("#add").on("click", function (event) {
        if (count < 5) {
            count++;
            console.log(count);
            $("#rightdiv").prepend("<img src='delftbox.png'>");
        }
    });

    $("#remove").on("click", function (event) {
        if (count > 0) {
            count--;
            console.log(count);
            $('#rightdiv').find("img").slice(count).remove();
        }
    });
};

$(document).ready(main);