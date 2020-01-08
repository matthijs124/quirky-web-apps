var main = function () {
    "use strict";

    var count = 1;
    var maxCount = 5;
    var secretCountPos = 0;
    var secretCountNeg = 0;

    $("#add").on("click", function (event) {

        if (secretCountNeg > 0) {
            secretCountPos = 0;
        }
        secretCountPos++;
        secretCountNeg = 0;

        console.log("Pos = " + secretCountPos);
        if (count < 5) {
            $("#alertbox").empty();
            count++;
            $("#rightdiv").prepend("<img src='delftbox.png'>");
        } else {
            $("#alertbox").empty();
            $("#alertbox").append("<p>Stack is full!</p>");
        }
    });

    $("#remove").on("click", function (event) {

        if (secretCountPos >= 6) {
            secretCountNeg++;
        } else {
            secretCountPos = 0;
            secretCountNeg = 0;
        }
        if (secretCountNeg > 9) {
            secretCountNeg = 0;
        }

        console.log("Neg = " + secretCountNeg);
        if (count > 0) {
            $("#alertbox").empty();
            count--;
            $('#rightdiv').find("img").slice(count).remove();
        } else {
            $("#alertbox").empty();
            $("#alertbox").append("<p>Nothing left to remove!</p>");
        }

        if (secretCountNeg === 9) {
            secretCountPos = 0;
            $("#alertbox").empty();
            $("#alertbox").append("<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click here</a>");
        }
    });

    
};

$(document).ready(main);