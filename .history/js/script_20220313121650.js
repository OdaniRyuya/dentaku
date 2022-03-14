$(document).ready(function () {
    //クリックした数字
    var click_number = "0"

    //現在の値
    var now = ""



    //数字をクリックした時の処理
    $(".numbers").click(function () {
        click_number = $(this).val();
        $("#monitor").append(click_number);
        now = click_number;
    });

    //四則演算をクリックした時の処理
    $(".fao").click(function () {
        
    })

    //リセットをクリックした時の処理

    //イコールをクリックした時の処理


    });