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
    var canvas = $("#canvas");
    var colorElement = $("#color");
    for (var i = 0; i < colors.length; i++) {
        colorElement.append("<option value='" + (i + 1) + "'>" + colors[i] + "</li");
    }

    var buttonPressed = false;
    canvas.mousedown(function () {
        buttonPressed = true;
    }).mouseup(function () {
        buttonPressed = false;
    }).mousemove(function (e) {
        if (buttonPressed)
        {
            setPoint(e.offsetX, e.offsetY, colorElement.val());
        }
    });

    var context = canvas[0].getContext("2d");

    function setPoint(x, y, color) {
        context.fillStyle = colors[color - 1];
        context.beginPath();
        context.arc(x, y, 2, 0, Math.PI * 2);
        context.fill();
    }

    function clearPoints() {
        context.clearRect(0, 0, canvas.width(), canvas.height());
    }

    $("#clear").click(clearPoints);

});