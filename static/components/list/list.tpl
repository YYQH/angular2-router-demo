<style type="text/css">@import url(list.scss?__inline);</style>
<div class="app-main-list">
    <div class="page-header">
        <h1><span class="glyphicon glyphicon-menu-hamburger"></span> 统计详情</h1>
    </div>
    <div class="container-fluid main-list">
	 	<div class="row table-title">
	    	<div class="col-lg-1 text-primary">项目id</div>
	    	<div class="col-lg-2 text-primary">开始时间</div>
	    	<div class="col-lg-2 text-primary">结束时间</div>
	    	<div class="col-lg-1 text-primary">状态</div>
	    	<div class="col-lg-2 text-primary">提交人</div>
	    	<div class="col-lg-4 text-primary">提交结果</div>
	  	</div>
	  	<div class="row" *ng-for="#list of lists">
	  		<div class="col-lg-1"><a href="#/Detail/{{list.id}}" class="text-success">{{list.id}}</a></div>
	  		<div class="col-lg-2">{{list.startday}}</div>
	  		<div class="col-lg-2">{{list.endday}}</div>
	  		<div class="col-lg-1">{{list.status}}</div>
	  		<div class="col-lg-2">{{list.userName}}</div>
	  		<div class="col-lg-4"><a href="{{list.download}}" class="text-success">{{list.download}}</a></div>
	  	</div>
	</div>
	<nav class="pull-right page-list">
		<ul class="pagination pagination-lg">
			<li><a href="#/List/1">&laquo;</a></li>
			<li *ng-for="#page of pages;" class="{{page.isChoose ? 'active' : ''}}"><a href="#/List/{{page.id}}">{{page.id}}</a></li>
			<li><a href="#/List/{{pageLength}}">&raquo;</a></li>
		</ul>
	</nav>
</div>
