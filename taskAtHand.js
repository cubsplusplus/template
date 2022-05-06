"use strict";

function taskAtHandApp()
{
    var version = "v1.0";

    function setStatus(message)
    {
        $("#app>footer").text(message);
    }

    this.start = function()
    {
        $("#app>header").append(version);
        setStatus("ready");

        $("#new-task-name").keypress(function(e) {
            if (e.which ==13)   //Enter key
            {
                addTask();
                return false;
            }
        })
        .focus();

        $("#app header").append(version);
        setStatus("ready");
        };
    }

    var taskAtHandApp = {
        version: "1.0",
        setStatus: function(message)
        {
            $("#app>footer").text(message);
        },
        start: function()
        {
            $("#app>header").append(this.version);
            this.setStatus("ready");
        }
    };
}



$(function() {
    window.app= new taskAtHandApp();
    window.app.start();
});
