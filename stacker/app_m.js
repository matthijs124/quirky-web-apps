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
        } else {
            $("#"+ (index+1) + "_" + stacks[index]).append("<img src='delftboxred.png'>");
        }

        console.log(stacks);
        totalBoxes++;
    });

    
};

$(document).ready(main);