$(document).ready(function () {
    //クリックした数字
    var click_button = 0
    //計算して出た現在の値
    var now = ""
    var fao_click_flag = true
    var numbers_

    //数字をクリックした時の処理
    $(".numbers").click(function () {
        click_button = $(this).val();
        $("#monitor").append(click_button);
        fao_click_flag = true;
    });

    //四則演算をクリックした時の処理
    $(".fao").click(function () {
        if (fao_click_flag == true) {
        //クリックした四則演算の文字をモニターに表示
        click_button = $(this).val();
         $("#monitor").append(click_button);
         fao_click_flag = false
        } 
    });

    //リセットをクリックした時の処理
    $("#ac").click(function () {
        fao_click_flag = false;
        now = "0"
        $("#monitor").text(now);
    });

    //イコールを押した時の処理
    $("#equal").click(function () {
                            //現在の値をnowに保存
        now = $("#monitor").text();
        now = eval(now);
        $("#monitor").text(now);

    });
    });