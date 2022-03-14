$(document).ready(function () {

    
    var time = 0; //経過時間
    var now; //現在の時間

    var min_time = 0;
    var sec_time = 0;

    var count;

    var hour = $("#hour");
    var min = $("#min");
    var sec = $("#sec");
    var millisec = $("#millisec");

    var start = $("#start");
    var stop = $("#stop");
    var reset = $("#reset");
    
    start.click(function () {
        now = new Date();
        count = setInterval(counter, 10);
        toggle();
    });
    
    });