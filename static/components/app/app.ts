/***
 * @Component 	: app
 * @Writer		: zhangrongming
 * @Description	: 布局组件
 **/

import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Route } from 'angular2/router';

import {APP_ROUTES} from 'router';
import {Navbar} from 'nav';

@Component({
    selector: 'traffic-app',
    templateUrl: __uri('app.tpl'),
    directives: [ROUTER_DIRECTIVES, Navbar]
})

@RouteConfig(APP_ROUTES)

export class TrafficApp {}

