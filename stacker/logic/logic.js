

var board;

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

    console.log("index: " + index);
    console.log("adjusted: " + adjusted);
    console.log(board[adjusted][index-3]);
    console.log(board[adjusted][index-3]);
    console.log(board[adjusted][index-1]);
    console.log(board[adjusted][index]);
    console.log(board[adjusted][index+1]);
    console.log(board[adjusted][index+2]);
    console.log(board[adjusted][index+3]);


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

updateboard(1, 1);
updateboard(1, 1);
updateboard(1, 1);
updateboard(1, 1);


printboard(board);