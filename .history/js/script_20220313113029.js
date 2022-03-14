$(document).ready(function () {
    //クリックした数字
    var click_number = ""

    $("input").click(function () {
        click_number = $(this).attr('id');
        alert(click_number);
    });
    });