$(document).ready(function () {
    //クリックした数字
    var click_number = ""

    $("input").click(function () {
        click_number = $(this).append('id');

        $("#monitor").text(click_number)
    });
    });