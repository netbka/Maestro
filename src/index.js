import UIkit from 'uikit';

$(document).ready(function () {
    $("#pass").keydown(function (e) {
        if (e.keyCode == 13) {
            VerifyLogin();
        }
        
    });

    $("#login").on('click', function(){
        VerifyLogin();
    });
   

    function VerifyLogin()
    {
        var pass = $("#pass").val();
        if (pass==='maestro')
        {
            $(".uk-overlay-primary").remove();
            $(".uk-overlay").remove();
            //player.playVideo();
            // var e = document.getElementById("player");
            // if (e.requestFullscreen) {
            //     e.requestFullscreen();
            // } else if (e.webkitRequestFullscreen) {
            //     e.webkitRequestFullscreen();
            // } else if (e.mozRequestFullScreen) {
            //     e.mozRequestFullScreen();
            // } else if (e.msRequestFullscreen) {
            //     e.msRequestFullscreen();
            // }
            setTimeout(redirect, 1000);
            // $(".hidden").toggle();
        }
        else
        {
            UIkit.notification("Пароль не подходит! ",{
                status  : 'danger',
                timeout : 3000,
                pos     : 'top-center'
            });
            
        }   
        function redirect() {
            //player.stopVideo();
            window.location = "presentation.html";
          }
    }
});

