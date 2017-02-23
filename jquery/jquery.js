$(document).ready(function(){
    $("footer").hide();
    $(".button").click(function(){
        $("footer").slideToggle("slow");
    });
});
