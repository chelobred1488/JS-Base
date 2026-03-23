$(document).ready(function () {
    $(":button").blur(function() { 
        $("ul").slideUp('fast');
    });
    $(":button").click(function () { 
        $("ul").slideToggle('slow');
        $(this).text("He")
    });
    
});