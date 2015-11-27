/***
 * @Component 	: list
 * @Writer		: zhangrongming
 * @Description	: 列表组件
 **/

import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {List, Page} from 'model/list';

// test Data
const ListResultTestData: any = [
    { "id": 1, "userName": "yyqh", "startday": 20151111, "endday": 20151212, "status": "success", "download": "http:\/\/www.demo.com" },
    { "id": 2, "userName": "yyqh", "startday": 20151111, "endday": 20151212, "status": "success", "download": "http:\/\/www.demo.com" }
];
const PageTestData: any = [
    { id: 1, isChoose: true },
	{ id: 2, isChoose: false },
	{ id: 3, isChoose: false }
];

@Component({
	selector: 'list-component',
	templateUrl: __uri('list.tpl'),
	viewProviders: [HTTP_PROVIDERS],
	directives: [CORE_DIRECTIVES]
})
export class ListComponent {
	lists: List[];
	pages: Page[];
	pn: number;
	pageLength: number;
	constructor(http: Http, param: RouteParams) {
        this.lists = ListResultTestData;
        this.pages = PageTestData;
		// this.pn = this.pageLength = Number.parseInt(param.get('pn')) || 1;
		// http
		// 	.get('/list')
		// 	.map(res=>res.json())
		// 	.subscribe(res=>{
		// 		this.lists = res.data;
		// 		this.pages = new Array(Math.ceil(res.total / 30)).fill(1).map((v:string, i:number)=>{
		// 			return new Page(++i, i === this.pn)
		// 		});
		// 		this.pageLength = this.pages.length;
		// 	})
	}
}
