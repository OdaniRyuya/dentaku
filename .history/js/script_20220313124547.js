$(document).ready(function () {
    //クリックした数字
    var click_button = "0"
    //計算して出た現在の値
    var now = ""
    var clicl_falg



    //数字をクリックした時の処理
    $(".numbers").click(function () {
        click_button = $(this).val();
        $("#monitor").append(click_button);
    });

    //四則演算をクリックした時の処理
    $(".fao").click(function () {
        //現在の値をnowに保存
        now = $("#monitor").text();
        //クリックした四則演算の文字をモニターに表示
        click_button = $(this).val();
         $("#monitor").append(click_button);
    });

    //リセットをクリックした時の処理
    $("#ac").click(function () {

    });

    //イコールを押した時の処理
    $("#equal").click(function () {

    });



    });