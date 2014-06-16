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
    print(link)
    d=feedparser.parse(link)
    return {d=d}  
    
@view_config(route_name='html')
def default(request):
    page=request.matchdict['page']
    return render_to_response('templates/'+page+'.html', {}, request=request)
