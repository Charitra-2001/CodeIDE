function updateinfo()
{
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$('#csspanel').val()+"</style></head><body>"+$('#htmlpanel').val())+ "</body></html>";

    document.getElementById("outputpanel").contentWindow.eval($("#javapanel").val());
}

$(".mybutton").hover(function(){

    $(this).addClass("highlight");
},function(){
   
    $(this).removeClass("highlight");

});
$(".mybutton").click(function(){

    $(this).toggleClass("active");
    $(this).removeClass("highlight");

    var panelid=$(this).attr("id")+"panel";
    // Make the ids of mybutton and textarea similar to make both function at same time
    $("#"+panelid).toggle();
    // same as toggleClass

    var Activepanel = $('.panel').length;
    $(".panel").width(($(window).width()/Activepanel)-10);

});


$(".panel").height($(window).height()-$("#header").height()-10);
$(".panel").width(($(window).width()/2)-10);

updateinfo();
$("textarea").on('change keyup paste', function() {
    updateinfo();
});
//Up we are using an iframe to copy the content of the html in the output section