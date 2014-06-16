# -*- coding: utf-8 -*-

from pyramid.view import view_config
from pyramid.renderers import render_to_response
import feedparser


@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project': 'RssReader'}
    
@view_config(route_name='r00t',renderer='templates/rss.html', http_cache=0)
def root(request):
    return {'project': 'RssReader'}

@view_config(route_name='rssfeed',renderer='json')
def rssfetch(request):
    link=request.POST['link']
    parseData=feedparser.parse(link)
    dat={}
    count=0
    chimg=parseData["channel"]["image"]["link"].encode("utf-8")

    for i in parseData["items"]:
      temp={}
      try:
        temp["title"]=i["title"].encode("utf-8")
        temp["summary"]=i["summary"].encode("utf-8")
        temp["link"]=i["link"].encode("utf-8")
        temp["date"]=i["published"].encode("utf-8")
        temp["image"]=i["media_thumbnail"][0]["url"].encode("utf-8")
        
      except Exception as inst:
        pass
      dat[str(count)]=temp
      count+=1
    return dict(dat=dat, count=count-1, chimg=chimg)  
    
@view_config(route_name='html')
def default(request):
    page=request.matchdict['page']
    return render_to_response('templates/'+page+'.html', {}, request=request)
