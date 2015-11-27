/***
 * @Component 	: cartoon
 * @Writer		: zhangrongming
 * @Description	: 动画组件
 **/

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {SportsComponent} from 'sports';

@Component({
	selector: 'cartoon-component',
	templateUrl: __uri('../sports/sports.tpl'),
	viewProviders: [HTTP_PROVIDERS],
	directives: [CORE_DIRECTIVES]
})
export class CartoonComponent extends SportsComponent{
	type: string;
	http: Http;
	hideStyles: any = new Object();
	title: string = '动画项目创建';
	constructor(http: Http) {
		this.type = 'cartoon';
		this.http = http;
		this.hideStyles.review = true;
	}
}