$(document).ready(function () {
    //クリックした数字
    var click_number = "0"

    //現在の値
    var now = ""

    $("#monitor").text(click_number);
    
    //数字をクリックした時の処理
    $(".numbers").click(function () {
        click_number = $(this).val();

    });

    //四則演算をクリックした時の処理

    //リセットをクリックした時の処理

    //イコールをクリックした時の処理


    });