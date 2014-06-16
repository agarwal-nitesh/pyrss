window.onload=function(){
  var sub=document.getElementById("sub");
  var feedcontainer=document.getElementById("url");
  
  sub.onclick=function fetchrss(){
    var feedurl="http://"+feedcontainer.value;
    $.ajax({
      type:'POST',
      url:'rssfeed',
      data :{link:feedurl}
    
    }).done(function(data) {

         for(var i=0;i<data.count;i++){
           if(i%3==0)
             $('#result').append("<div class=\"row\"");
             
           $('#result').append("<div class=\"col-md-4\">");
           $('#result').append(data.dat[i].title);
           $('#result').append("</div><br />");
           
           $('#result').append("<div class=\"col-md-4\">");
           $('#result').append(data.dat[i].link);
           $('#result').append("</div><br />");
           
           $('#result').append("<div class=\"col-md-4\">");
           $('#result').append(data.dat[i].summary); 
           $('#result').append("</div><br />");
           
           if(i%3==0)
             $('#result').append("</div>");
         } 
       });
  }


  
}

