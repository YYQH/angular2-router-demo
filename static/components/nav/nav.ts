/***
 * @Component 	: nav
 * @Writer		: zhangrongming
 * @Description	: 导航组件
 **/

import {Component} from 'angular2/angular2';
import {Route, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from 'router';

@Component({
  selector: 'navbar',
  properties: ['routes'],
  templateUrl: __uri('nav.tpl'),
  directives: [ROUTER_DIRECTIVES]
})
export class Navbar {
  public routes;

  constructor() {
    this.routes = Routes;
  }
}