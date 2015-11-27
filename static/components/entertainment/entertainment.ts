/***
 * @Component 	: entertainment
 * @Writer		: zhangrongming
 * @Description	: 娱乐组件
 **/

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import {SportsComponent} from 'sports';

@Component({
	selector: 'entertainment-component',
	templateUrl: __uri('../sports/sports.tpl'),
	viewProviders: [HTTP_PROVIDERS],
	directives: [CORE_DIRECTIVES]
})
export class EntertainmentComponent extends SportsComponent{
	type: string;
	http: Http;
	hideStyles: any = new Object();
	title: string = '娱乐项目创建';
	constructor(http: Http) {
		this.type = 'entertainment';
		this.http = http;
		this.hideStyles.review = true;
	}
}