$(document).ready(function () {
    //クリックした数字
    var click_number = ""
    var now = ""

    $("input").click(function () {
        click_number = $(this).attr('id');
        if (click_number == ".numbers") {
            alert("s");
        }

    });
    });