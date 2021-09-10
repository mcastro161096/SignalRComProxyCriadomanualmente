//$(function () {
        //    var connection = $.hubConnection();
        //    var proxy = connection.createHubProxy("myServer");

        //    connection.start().done(function () {
        //        $("#sendAlert").click(function () {
        //            proxy.invoke("AlertAll", "Opa");
        //        });
        //    });

        //    proxy.on("clientAlertAll", function (msg) {
        //        alert(msg);
        //    });
        //});

$(function () {
    var colors = ["black", "red", "green", "blue", "yellow", "magenta", "white"];
    var canvas = $("#cancas");
    var colorElement = $("#color");
    for (var i = 0; i < colors.length; i++) {
        colorElement.append("<option value='" + (i + 1) + "'>" + colors[i] + "</li");
    }



});