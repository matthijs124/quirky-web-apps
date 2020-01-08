var main = function () {
    "use strict";

    $("button").on("click", function (event) {
        var a = parseInt($("#power-2").val());
        var b = parseInt($("#power-1").val());
        var c = parseInt($("#power-0").val());
        
        var D = b*b - 4*a*c;

        if (D < 0) {
            $("#root-1").text("No results");
            $("#root-2").text("No results");
        }

        if (D == 0) {
            $("#root-1").text(calcRoot(a, b, D, 1).toFixed(4));
            $("#root-2").text("No results");
        }

        if (D > 0) {
            $("#root-1").text(calcRoot(a, b, D, 1).toFixed(4));
            $("#root-2").text(calcRoot(a, b, D, -1).toFixed(4));
        }

        console.log(D);
    });

    function calcRoot(a, b, D, p) {
        var x = (-b + p * Math.sqrt(D))/(2 * a);
        return x;
    }
};

$(document).ready(main);