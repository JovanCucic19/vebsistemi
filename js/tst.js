/**
 * Created by q on 3/24/2016.
 */


$(document).ready(function () {
    $(".liklasa2").click(function () {
        $("#obavestenje").animate({
            height: 'toggle'
        });
    });
});


var time,timeSite;

window.onload = function(){
    time = new Date();
}


$(window).bind('beforeunload', function(){
    timeSite = new Date() - time;
    seconds = timeSite / 1000;
    return "Proveo si " + seconds + " sekunde na stranici." ;
});

