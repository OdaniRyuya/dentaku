$(document).ready(function () {

    //クリック不能にする関数
    function notClick(){}
       
    
    let StartClick = "start";
    let Stop = "stop";
    let Reset = "reset";

    if (StartClick === "start") {
               $("#start").click(function () {
           $("#stop,#reset").css("cursor", "pointer");
           $("#stop,#reset").css("opacity", "1");
           $(this).css("cursor", "default");
           $(this).css("opacity", "0.4");
       }
       );
    }

    });