$(document).ready(function () {

    var hour = 0;
    var min = 0;
    var sec = 0;
    var mil_sec = 0;
    
    $("#hour").html(hour);
    $("#min").html(min);
    $("#sec").html(sec);
    $("#mil_sec").html(mil_sec);

    
    //スタートを押した時の処理
    $("#start").click(function () {
        $(this).prop("disabled",true);
        $("#stop,#reset").prop("disabled", false);
        timer = setInterval(function () {
            mil_sec++;
            if (mil_sec == 10) {
                mil_sec = 0;
                sec++;
            } else if (sec == 60) {
                sec = 0;
                min++;
            } else if (min == 60) {
                min = 0;
                hour++;
            };
        },100);
    });

    //ストップを押した時の処理
    $("#stop").click(function () {
        clearInterval(timer);
                $(this).prop("disabled",true);
        $("#start,#reset").prop("disabled", false);
    });

    //リセットを押した時の処理
    $("#reset").click(function () {
                $("#reset,#stop").prop("disabled",true);
        $("#start").prop("disabled", false);
        clearInterval(timer);
     hour = 0;
     min = 0;
 sec = 0;
        mil_sec = 0;
                    $("#hour").html(hour);
            $("#min").html(min);
            $("#sec").html(sec);
            $("#mil_sec").html(mil_sec)
    });

    
    });