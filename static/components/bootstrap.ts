/***
 * @Component 	: bootstrap
 * @Writer		: zhangrongming
 * @Description	: 项目启动
 **/

import {provide, bootstrap} from 'angular2/angular2';
import {HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {TrafficApp} from 'app';

bootstrap(TrafficApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);


