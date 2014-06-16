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
         c=0;
         for(var i=0;i<data.count;i++){
           $('#result').append(data.dat[i].title);
           $('#result').append(data.dat[i].link);
           $('#result').append(data.dat[i].summary);
           c++;
         } 
       });
  }


  
}

