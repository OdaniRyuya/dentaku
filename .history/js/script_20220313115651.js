$(document).ready(function () {
    //クリックした数字
    var click_number = ""
    var now = ""

    $("input").click(function () {
        click_number = $(this).data();

        if ($(this).hasClass('numbers')) && now == "" {
            alert("number");
            
        }

    });
    });