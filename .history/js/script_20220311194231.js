$(document).ready(function () {

    //スタートを押した時の表示
    function StartClick() {
        let start = "start"
           $("#stop,#reset").css("cursor", "pointer");
           $("#stop,#reset").css("opacity", "1");
           $(this).css("cursor", "default");
           $(this).css("opacity", "0.4");
    }
    if (StartClick === "start") {
        $("#start").click(function () {
                   StartClick
       }
       );
    }

    });