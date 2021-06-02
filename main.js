

function send(){
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Message = document.getElementById('message').value;

    var error  = "";
    if(Name==""){
        error = "empty Name!!";
    }
    if(Email==""){
        error = "empty Email!!";
    }
    if(Message==""){
        error = "Please say someThing";
    }
   
    if(Name !="" && Email !="" && Message!=""){
       
        alert("Hey! "+ Name+", your Email Successfully send! we'll repy you later (-_-)");
    }
    else{
    alert(error);
     
 }
}

$('.fa-spin ').click(function(){
    alert("this  is  just a icon!!");
})


 var app = document.getElementById('app');
app.setAttribute('colour', "red");
 app.innerHTML="Your  app Version : "+navigator.appVersion+" <br> Name: "+navigator.appCodeName+" <br> javaSupported?: "+navigator.javaEnabled;

  
 var day =new Date();
 document.getElementById('toYear').innerHTML = day.getFullYear();
 document.getElementById('toDay').innerHTML = day.getDate();
 document.getElementById('toMonth').innerHTML = day.getMonth()+ 1;
 document.getElementById('Hour').innerHTML = day.getHours();
 document.getElementById('Min').innerHTML = day.getMinutes();
 document.getElementById('sec').innerHTML = day.getSeconds();
  