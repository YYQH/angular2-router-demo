/***
 * @Component 	: sport
 * @Writer		: zhangrongming
 * @Description	: 运动组件
 **/

import {Component, View, COMMON_DIRECTIVES} from 'angular2/angular2';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'sports-component',
	viewProviders: [HTTP_PROVIDERS]
})
@View({
	templateUrl: __uri('sports.tpl'),
	directives: [COMMON_DIRECTIVES]
})
export class SportsComponent {
	type: string;
	http: Http;
	param: string;
	queryUpload: number;
	title: string = '体育项目创建';
	public errText: string = '提交失败';
	public sendData_type: string;
	public sendData_changequery: string;
	public hideStyles: any = new Object();
	public jobs: any;
	public jobName: string;
	public jobId: number;
	constructor(http: Http) {
		this.type = 'sports';
		this.http = http;
	}
	uploadFile(e: any) {
		var formData = new FormData();
		formData.append("name", "file");
		formData.append("file", e.target.files[0]);
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					let res: any = JSON.parse(xhr.responseText);
					if (res.errno == 0 && res.data) {
						this.queryUpload = res.data;
					}else{
						alert(this.errText)
					}
				} else {
					alert(this.errText);
				}
			}
		};
		xhr.open('POST', '/upload', true);
		xhr.send(formData);
	}
	changeProject(value: string){
		this.http
			.get('/projectlist?name=' + value)
			.map(res => res.json())
			.subscribe(response => {
				this.jobs = response.data;
				this.hideStyles.showJobsList = true;
			})
	}
	chooseJob(job: any) {
		this.jobName = job.name;
		this.jobId = job.id;
		this.hideStyles.showJobsList = false;
	}
	radioChange(value: string, key: string) {
		this['sendData_' + key] = value;
	}
	formateData(data: any) {
		let param: string = '';
		for(let i: any in data){
			param += '&' + i + '=' + (data[i] || '')
		}
		return param.slice(1);
	}
	submit(data: any){
		this.param = this.formateData(data);
		this.sendData();
	}
	sendData(){
		this.http
			.get('/project?' + this.param)
			.map(res => res.json())
			.subscribe(response => {
				if (response.errno === 0 && response.data.tastId) {
					setTimeout(()=>{
						location.hash = '#/Detail/' + response.data.tastId;
					})
					alert('恭喜您！提交成功，5秒后为您跳转！');
				}else{
					alert(this.errText);
				}
			})
	}
}