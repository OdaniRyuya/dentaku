$(document).ready(function () {

    //スタートを押した時の表示
    function StartClick() {
           $("#stop,#reset").css("cursor", "pointer");
           $("#stop,#reset").css("opacity", "1");
           $("#start").css("cursor", "default");
           $("#start").css("opacity", "0.4");
    }
        //ストップを押した時の表示
    function StartClick() {
           $("#start,#reset").css("cursor", "pointer");
           $("#start,#reset").css("opacity", "1");
           $("#stop").css("cursor", "default");
           $("#stop").css("opacity", "0.4");
    }
    function StartClick() {
           $("#start").css("cursor", "pointer");
           $("#start").css("opacity", "1");
           $("#stop","reset").css("cursor", "default");
           $("#stop","reset").css("opacity", "0.4");
    }

    let start = "start";
    let stop = "stop";
    let reset = "reset";
    
    if (start === "start") {
        $("#start").click(function () {
            StartClick();
       }
       );
    }

    });