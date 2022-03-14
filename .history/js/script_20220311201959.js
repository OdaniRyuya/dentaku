$(document).ready(function () {

    //現在のタイマー状況を取得
    let timer_flag = "reset"

    
    if (timer_flag === "reset") {
        $("#start").click(function () {
            StartClick();
        });
    } else if (timer_flag === "start") {
                $("#stop").click(function () {
            StopClick();
        });
    }
    //スタートを押した時の表示
    function StartClick() {
           $("#stop,#reset").css("cursor", "pointer");
           $("#stop,#reset").css("opacity", "1");
           $("#start").css("cursor", "default");
        $("#start").css("opacity", "0.4");
        timer_flag = "start"
    }
        //ストップを押した時の表示
    function StopClick() {
           $("#start,#reset").css("cursor", "pointer");
           $("#start,#reset").css("opacity", "1");
           $("#stop").css("cursor", "default");
           $("#stop").css("opacity", "0.4");
    }
    //リセットを押した時の表示
    function ResetClick() {
           $("#start").css("cursor", "pointer");
           $("#start").css("opacity", "1");
           $("#stop,#reset").css("cursor", "default");
           $("#stop,#reset").css("opacity", "0.4");
    }

    });