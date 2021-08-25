
// $("#drag").draggable({axis:'x'}); //To drag the content name the main id as drag and then write the function.
//                     // use x or y axis to drag vertical or horizonal

// $( "#resize" ).resizable();
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


$("#btn").click(function()
{



    var field_empty="";
    var count=0;
    var count1=0;
    var check="";

    if($("#email").val()=="")
    {
        count=1;
        field_empty+="<p>Email is missing!</p>";
    }
    if($("#password").val()=="")
    {
        count1=1;
        field_empty+="<p>Password is missing</p>";
    }

    if(isEmail($("#email").val())==false&&count==0)
    {
        check+="<p>Email is not correct!!</p>";
    }
    else if(count==0){
        
        $("#email").css("color","green")
    }

    if($.isNumeric($("#password").val())==false&&count1==0)
    {
        check+="<p>Password is not correct</p>";
    }
    else if(count1==0){
        $("#password").css("color","green")
    }

    if(check==""&&field_empty=="")
    {
        
        check+="<p>Logged in Successfully</p>";
        location.assign("./codeplayer.html");
       
        
    }
    else{
        check+=field_empty;
    }
    $(".error").html(check);
});