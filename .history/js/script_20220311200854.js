$(document).ready(function () {

    //現在のタイマー状況を取得
    let nowTimer = "reset"


    
    if (nowTimer === "reset" || nowTimer === "null") {
        $("#start").click(function () {
            StartClick();
        });
    } else if (nowTimer === "start") {
                $("#stop").click(function () {
            StopClick();
        });
    }

    });