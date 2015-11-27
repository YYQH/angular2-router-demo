/***
 * @Component     : Detail
 * @Writer        : zhangrongming
 * @Description   : 详情组件
 **/

import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

// test Data
const TestData = { "userName": "yyqh", "jobName": "test" };

@Component({
    selector: 'detail-component',
	templateUrl: __uri('detail.tpl'),
    directives: [CORE_DIRECTIVES],
    viewProviders: [HTTP_PROVIDERS]
})
export class DetailComponent {
    private id: number;
    constructor(param: RouteParams, http: Http) {
        this.id = Number.parseInt(param.get('id'));
        if(!this.id){
			window.location.hash = '';
        }
        // 测试数据
        for (let i in TestData)
            this[i] = TestData[i];
   //      http
			// .get('/detail')
			// .map(res => res.json())
			// .subscribe(response => {
   //              let data = JSON.parse(response.data);
   //              for (var i in data)
			// 		this[i] = data[i];
			// })
    }
}