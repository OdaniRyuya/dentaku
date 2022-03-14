$(document).ready(function () {
       
    
    let StartClick = "start";
    let Stop = "stop"
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