$(document).ready(function () {
    //字串相加
    $(".number ul li").click(function () {
        let num1 = $(this).text();
        if (num1 != "C" && num1 != "Del") { 
            //數字加在後面
            $("#num").val($("#num").val() + num1);
        } else if (num1 = "Del" && num1 != "C") { 
            //減去尾巴一個
            $("#num").val($("#num").val().substring(0, $("#num").val().length - 1));
        } else {  
            //清除input
            $("#num").val("");
        }
    });
    //加上運算符號
    $(".operator ul li").click(function () {
        let op = $(this).text();
        if (op != "=") {
            $("#num").val($("#num").val() + op);
        }
    });
    //當按下=時
    var app_num = 0;
    $("#equal").click(function () {
        //檢查中間運算符號是哪種
        if ($("#num").val().indexOf("+") != -1) { 
            app_num = 1;
        }
        if ($("#num").val().indexOf("-") != -1) { 
            app_num = 2;
        }
        if ($("#num").val().indexOf("*") != -1) { 
            app_num = 3;
        }
        if ($("#num").val().indexOf("/") != -1) { 
            app_num = 4;
        }

        switch (app_num) {
            case 1:
                num_arr = $("#num").val().split("+"); //從運算符號切一半
                var temp1 = parseFloat(num_arr[0]);
                var temp2 = parseFloat(num_arr[1]);
                var resout = temp1 + temp2;
                $("#num").val(resout);
                break;
            case 2:
                num_arr = $("#num").val().split("-");
                var temp1 = parseFloat(num_arr[0]);
                var temp2 = parseFloat(num_arr[1]);
                var resout = temp1 - temp2;
                $("#num").val(resout);
                break;
            case 3:
                num_arr = $("#num").val().split("*");
                var temp1 = parseFloat(num_arr[0]);
                var temp2 = parseFloat(num_arr[1]);
                var resout = temp1 * temp2;
                $("#num").val(resout);
                break;
            case 4:
                num_arr = $("#num").val().split("/");
                var temp1 = parseFloat(num_arr[0]);
                var temp2 = parseFloat(num_arr[1]);
                var resout = temp1 / temp2;
                $("#num").val(resout);
                break;
        }
    });
});