$(document).ready(function () {

    var hour = 0;
    var min = 0;
    var sec = 0;
    var mil_sec = 0;
    
    $("#hour").html(hour);
    $("#min").html(min);
    $("#sec").html(sec);
    $("#mil_sec").html(mil_sec);

    $("#start").click(function () {
        timer = setInterval(function () {
            $("#hour").html(hour);
            $("#min").html(min);
            $("#sec").html(sec);
            $("#mil_sec").html(mil_sec)
            mil_sec++;
            if (mil_sec == 10) {
                mil_sec = 0;
                sec++;
            } else if (sec == 60) {
                sec = 0;
                min++;
            } else if (min == 60) {
                min == 0;
                hour
            }
        },100);
    });
    
    });