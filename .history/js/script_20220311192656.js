   $(document).ready(function(){

       $("#start").click(function () {
           $("#stop,#reset").css("cursor", "pointer");
           $("#stop,#reset").css("opacity", "1");
           $(this).css("cursor", "pointer");
           $(this).css("opacity", "1");
       }
       );



    });