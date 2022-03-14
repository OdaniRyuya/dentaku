$(document).ready(function () {
    //クリックした数字
    var click_button = "0"
    //計算して出た現在の値
    var now = "0"
    var fao_click_flag = true
    var number_click_flag = true
    var equal_click_flag = true
    var zero_and_point_flag = false
    
    $("#monitor").append(click_button);

    //1~9をクリックした時の処理
    $(".numbers").click(function () {
        click_button = $(this).val();
        if (number_click_flag == true && now != "0" ) {
        click_button = $(this).val();
        $("#monitor").append(click_button);
        }
        else {
            $("#monitor").html(click_button);
            now = click_button;
        }
        fao_click_flag = true;
    });

    //0,00,.

    //四則演算をクリックした時の処理
    $(".fao").click(function () {
        if (fao_click_flag == true) {
        //クリックした四則演算の文字をモニターに表示
        click_button = $(this).val();
         $("#monitor").append(click_button);
            fao_click_flag = false
            number_click_flag = true
        } 
    });

    //リセットをクリックした時の処理
    $("#ac").click(function () {
        fao_click_flag = false;
        now = "0"
        $("#monitor").text(now);
        number_click_flag = true
        
    });

    //イコールを押した時の処理
    $("#equal").click(function () {
                            //現在の値をnowに保存
        now = $("#monitor").text();
        now = eval(now);
        $("#monitor").text(now);
        number_click_flag = false

    });
    });