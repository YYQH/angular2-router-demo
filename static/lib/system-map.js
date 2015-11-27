//configure system loader
System.config({
    map: {
        'angular2/angular2' : '/static/lib/angular2.dev.js',
        'angular2/http'     : '/static/lib/http.dev.js',
        'angular2/router'   : '/static/lib/router.dev.js',
        'bootstrap'         : __uri('/static/components/bootstrap'),
        'app'               : __uri('/static/components/app/app'),
        'router'            : __uri('/static/components/route/route'),
        'nav'               : __uri('/static/components/nav/nav'),
        'sports'            : __uri('/static/components/sports/sports'),
        'entertainment'     : __uri('/static/components/entertainment/entertainment'),
        'cartoon'           : __uri('/static/components/cartoon/cartoon'),
        'list'              : __uri('/static/components/list/list'),
        'detail'            : __uri('/static/components/detail/detail'),
        'model/list'        : __uri('/static/model/list')
    },
    defaultJSExtensions: true

});