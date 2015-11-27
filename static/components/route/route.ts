/***
 * @Component 	: route
 * @Writer		: zhangrongming
 * @Description	: 路由组件
 **/

import {Route} from 'angular2/router';
import {SportsComponent} from 'sports';
import {EntertainmentComponent} from 'entertainment';
import {CartoonComponent} from 'cartoon';
import {ListComponent} from 'list';
import {DetailComponent} from 'detail';

export var Routes = {
    sports			: new Route({ path: '/', component: SportsComponent, name: 'Sport', data: { title: '体育项目' } }),
    entertainment	: new Route({ path: '/Entertainment', component: EntertainmentComponent, name: 'Entertainment', data: { title: '娱乐项目' } }),
    cartoon			: new Route({ path: '/Cartoon', component: CartoonComponent, name: 'Cartoon', data: { title: '动画项目' } }),
    list			: new Route({ path: '/List/*pn', component: ListComponent, name: 'List', data: { title: '项目列表' } }),
    detail			: new Route({ path: '/Detail/*id', component: DetailComponent }),
    def				: new Route({ path: '/**', component: SportsComponent })

}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);


