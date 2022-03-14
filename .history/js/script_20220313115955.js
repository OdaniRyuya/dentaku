$(document).ready(function () {
    //クリックした数字
    var click_number = ""
    var now = ""

    $(".numbers").click(function () {
        click_number = $(this).data();

        if ($(this).hasClass('numbers')) {
            alert("number");
            
        } else if ($(this).hasClass("fao")) {
            alert("fao");
        }
    });


    });