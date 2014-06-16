window.onload=function(){
  var sub=document.getElementById("sub");
  var feedcontainer=document.getElementById("url");
  
  sub.onclick=function fetchrss(){
    var feedurl="http://"+feedcontainer.value;
    $.ajax({
      type:'POST',
      url:'rssfeed',
      data :{link:feedurl}
    
    });
  }


  
}

