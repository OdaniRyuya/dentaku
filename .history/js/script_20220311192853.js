$(document).ready(function () {
       
    
    let ClickStart = Boolean
       $("#start").click(function () {
           $("#stop,#reset").css("cursor", "pointer");
           $("#stop,#reset").css("opacity", "1");
           $(this).css("cursor", "default");
           $(this).css("opacity", "0.4");
       }
       );
    });