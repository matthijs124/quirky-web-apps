var main = function () {
    "use strict";

    var stacks = [0, 0, 0, 0, 0, 0, 0];
    var totalBoxes = 0;

    $(".column").on("click", function (event) {
        var index = $(this).index(); 
        if (stacks[index] < 6) {
            stacks[index]++;
        }
        if (totalBoxes % 2 === 0) {
            $("#"+ (index+1) + "_" + stacks[index]).append("<img src='delftbox.png'>");
            $(this).css("background-color", "red");
        } else {
            $("#"+ (index+1) + "_" + stacks[index]).append("<img src='delftboxred.png'>");
            $(this).css("background-color", "blue");
        }

        console.log(stacks);
        totalBoxes++;
    });

    $(".column").hover( 
        function() {
            if (totalBoxes % 2 === 0) {
                $(this).css("background-color", "blue");
            } else {
                $(this).css("background-color", "red");
            }
           
        }, function() {
            $(this).css("background-color", "pink");
        }
    );
};

$(document).ready(main);