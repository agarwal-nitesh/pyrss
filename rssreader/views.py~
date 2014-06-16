# -*- coding: utf-8 -*-

from pyramid.view import view_config
from pyramid.renderers import render_to_response
import feedparser


@view_config(route_name='home', renderer='templates/mytemplate.pt')
def my_view(request):
    return {'project': 'RssReader'}
    
@view_config(route_name='r00t',renderer='templates/rss.html')
def root(request):
    return {'project': 'RssReader'}

@view_config(route_name='rssfeed',renderer='json')
def rssfetch(request):
    link=request.POST['link']
    parseData=feedparser.parse(link)
    dat={}
    count=0
    for i in parseData["items"]:
      temp={}
      temp["title"]=i["title"].encode("utf-8")
      temp["summary"]=i["summary"].encode("utf-8")
      temp["link"]=i["link"].encode("utf-8")
      dat[str(count)]=temp
      count+=1
    return dict(dat=dat)  
    
@view_config(route_name='html')
def default(request):
    page=request.matchdict['page']
    return render_to_response('templates/'+page+'.html', {}, request=request)
