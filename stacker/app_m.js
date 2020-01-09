var main = function () {
    "use strict";

    var stacks = [0, 0, 0, 0, 0, 0, 0];
    var totalBoxes = 0;
    var gameEnd = false;

    $(".column").on("click", function (event) {
        var index = $(this).index(); 
        if (stacks[index] < 6 && gameEnd == false) {
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
                
                updateboard(index, 1);
                if (checkwin(board, 1, index)) {
                    $("#turnbox").empty();
                    $("#turnbox").append("<img src='delftbox.png' class='turn-img'>");
                    $("#turnbox").append("<span><p class='turn-p'>BLUE VICTORY</p></span>");
                    $("body").css("background-color", "rgb(0, 166, 214)");
                    gameEnd = true;
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

                updateboard(index, 2);
                if (checkwin(board, 2, index)) {
                    $("#turnbox").empty();
                    $("#turnbox").append("<img src='delftboxred.png' class='turn-img'>");
                    $("#turnbox").append("<span><p class='turn-p'>RED VICTORY</p></span>");
                    $("body").css("background-color", "rgb(245, 66, 66)");
                    gameEnd = true;
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
        gameEnd = false;
        totalBoxes = 0;
        stacks = [0, 0, 0, 0, 0, 0, 0];
        board = [
            [9,9,9,9,9,9,9,9,9,9,9,9,9],
            [9,9,9,9,9,9,9,9,9,9,9,9,9],
            [9,9,9,9,9,9,9,9,9,9,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,0,0,0,0,0,0,0,9,9,9],
            [9,9,9,9,9,9,9,9,9,9,9,9,9],
            [9,9,9,9,9,9,9,9,9,9,9,9,9],
            [9,9,9,9,9,9,9,9,9,9,9,9,9]];
        
        $("body").css("background-color", "lightsteelblue");
    });

    var board = [
    [9,9,9,9,9,9,9,9,9,9,9,9,9],
    [9,9,9,9,9,9,9,9,9,9,9,9,9],
    [9,9,9,9,9,9,9,9,9,9,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,0,0,0,0,0,0,0,9,9,9],
    [9,9,9,9,9,9,9,9,9,9,9,9,9],
    [9,9,9,9,9,9,9,9,9,9,9,9,9],
    [9,9,9,9,9,9,9,9,9,9,9,9,9]];

    var updateboard = function(input, player) {
        for(var i=board[input+3].length-3; i>2; i--) {
            if(board[input+3][i] === 0) {
                board[input+3][i] = player;
                break;
            }
        }
    }

    var checkwin = function(board, player, input) {

        var adjusted = input + 3;
        var string="";
        var index;

    for(var i=0; i<board[adjusted].length; i++) {
        if(board[adjusted][i] === player) {
            index=i;
            break;
        }
    }

    // add the vertical and horizontal
    string += "" +
        board[adjusted][index-3] +
        board[adjusted][index-2] +
        board[adjusted][index-1] +
        board[adjusted][index] +
        board[adjusted][index+1] +
        board[adjusted][index+2] +
        board[adjusted][index+3] +
        "8" +
        board[adjusted-3][index] +
        board[adjusted-2][index] +
        board[adjusted-1][index] +
        board[adjusted][index] +
        board[adjusted+1][index] +
        board[adjusted+2][index] +
        board[adjusted+3][index];

    // add the diagonals
    string += "8" +
        board[adjusted-3][index-3] +
        board[adjusted-2][index-2] +
        board[adjusted-1][index-1] +
        board[adjusted][index] +
        board[adjusted+1][index+1] +
        board[adjusted+2][index+2] +
        board[adjusted+3][index+3] +
        "8" +
        board[adjusted-3][index+3] + 
        board[adjusted-2][index+2] +
        board[adjusted-1][index+1] +
        board[adjusted][index] +
        board[adjusted+1][index-1] +
        board[adjusted+2][index-2] +
        board[adjusted+3][index-3];

    var substring = ""+player+player+player+player;

    console.log("string: " + string);
    console.log("sub: " + substring);

    return string.includes(substring);
    }

    var printboard = function(board) {
        var string = "";
        for(var i=0; i<board.length; i++){
            string += " | ";
            for(var j=0; j<board[i].length; j++) {
                string += board[i][j] + " | ";
            }
            string += "\n";
        }
        console.log(string);
    }
};

$(document).ready(main);