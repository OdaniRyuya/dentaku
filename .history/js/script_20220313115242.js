$(document).ready(function () {
    //クリックした数字
    var click_number = ""
    var now = ""

    $("input").click(function () {
        click_number = $(this).data();

        if (click_number.hasClass('.numbers')) {
                    alert("aa");

        }

    });
    });