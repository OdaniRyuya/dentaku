$(document).ready(function () {
    //クリックした数字
    var click_number = ""

    $("input").click(function () {
        click_number = $(this).text('id');
        $("#monitor").html(click_number)
    });
    });