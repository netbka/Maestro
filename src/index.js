import UIkit from 'uikit';
//import Hls from 'Hls';
  

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
			
				player.setVolume(80);
				player.setPlaybackQuality('hd720');
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
	
			
			
            setTimeout(redirect, 448000);
            
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
			$(".hidden").toggle();
            //player.stopVideo();
            window.location = "presentation.html";
          }
    }
});

