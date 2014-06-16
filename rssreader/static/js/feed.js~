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
         
           img="<img src=\""+data.dat[i].image+"\" />";
           console.log(img);
           colst1="<div class=\"col-md-1\">"
           colst2="<div class=\"col-md-2\">";
           colst3="<div class=\"col-md-3\">";
           colst4="<div class=\"col-md-4\">";
           
           sh=colst1+"<a href=\""+data.dat[i].link+"\">"+img+"</a></div>";
           console.log(sh);
           
           $('#result').append("<div class=\"row\" id=\"row"+i+"\">");
             
           $('#row'+i).append(colst3+"<b>"+data.dat[i].title+"</b>"+"</div>");
           
           
           $('#row'+i).append(sh);
           
           $('#row'+i).append(colst4+data.dat[i].summary+"</div>");
          
           //$('#row'+i).append("<div class=\"col-md-4\">"+data.dat[i].summary+"</div>");
           $('#result').append("</div><>");
         } 
       });
  }


  
}

