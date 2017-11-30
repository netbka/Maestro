// import './index.css';

//import { app } from "./app";


//app.$mount("#app");

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
//import {$,jQuery} from 'jquery';
// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference

//UIkit.notification('Hello world.');

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
            player.playVideo();
            var e = document.getElementById("player");
            if (e.requestFullscreen) {
                e.requestFullscreen();
            } else if (e.webkitRequestFullscreen) {
                e.webkitRequestFullscreen();
            } else if (e.mozRequestFullScreen) {
                e.mozRequestFullScreen();
            } else if (e.msRequestFullscreen) {
                e.msRequestFullscreen();
            }
            setTimeout(redirect, 11000);
            // $(".hidden").toggle();
        }
        else
        {
            UIkit.notification("<span uk-icon='icon: warning'></span> РџР°СЂРѕР»СЊ РЅРµ РїРѕРґС…РѕРґРёС‚!",{
                status  : 'danger',
                timeout : 3000,
                pos     : 'top-center'
            });
            
        }   
        function redirect() {
            player.stopVideo();
            window.location = "presentation.html";
          }
    }
});

