var main = function () {
    "use strict";

    var stacks = [0, 0, 0, 0, 0, 0, 0];
    var totalBoxes = 0;

    $(".column").on("click", function (event) {
        var index = $(this).index(); 
        if (stacks[index] < 6) {
            stacks[index]++;
            if (totalBoxes % 2 === 0) {
                $("#"+ (index+1) + "_" + stacks[index]).append("<img src='delftbox.png'>");
                $(this).css("background-color", "rgb(245, 66, 66)");
    
                if (totalBoxes < 41) {
                    $("#turnbox").empty();
                    $("#turnbox").append("<img src='delftboxred.png' class='turn-img'>");
                    $("#turnbox").append("<span><p class='turn-p'>Red's turn</p></span>");
                } else {
                    $("#turnbox").empty();
                }
    
            } else {
                $("#"+ (index+1) + "_" + stacks[index]).append("<img src='delftboxred.png'>");
                $(this).css("background-color", "rgb(0, 166, 214)");

                if (totalBoxes < 41) {
                    $("#turnbox").empty();
                    $("#turnbox").append("<img src='delftbox.png' class='turn-img'>");
                    $("#turnbox").append("<span><p class='turn-p'>Blue's turn</p></span>");
                } else {
                    $("#turnbox").empty();
                }
            }
            totalBoxes++;
        }
        

        console.log(stacks);
        console.log(totalBoxes);
        
    });

    $(".column").hover( 
        function() {
            if (totalBoxes % 2 === 0) {
                $(this).css("background-color", "rgb(0, 166, 214)");
            } else {
                $(this).css("background-color", "rgb(245, 66, 66)");
            }
           
        }, function() {
            $(this).css("background-color", "white");
        }
    );

    $("button").on("click", function (event) {
        $("li").empty();
        $("#turnbox").empty();
        totalBoxes = 0;
        stacks = [0, 0, 0, 0, 0, 0, 0];
    });
};

$(document).ready(main);