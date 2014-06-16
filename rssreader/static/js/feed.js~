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
             $('#result').append("<div class=\"row\" id=\"row"+i+"\">");
             
           $('#row'+i).append("<div class=\"col-md-4\">"+data.dat[i].title+"</div>");
           
           $('#row'+i).append("<div class=\"col-md-4\">"+"<a href=\""+data.dat[i].link+"\">link</a>"+"</div>");
           
           $('#row'+i).append("<div class=\"col-md-4\">"+data.dat[i].summary+"</div>");
             
           
           if(i%3==0)
             $('#result').append("</div>");
         } 
       });
  }


  
}

