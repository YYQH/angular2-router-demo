<style type="text/css">@import url(detail.scss?__inline);</style>
<div class="app-main-detail">
    <div class="page-header">
        <h1><span class="glyphicon glyphicon-menu-hamburger"></span> 统计详情</h1>
    </div>
    <div class="container-fluid main-form form-horizontal">
        <div class="row" [style.display]="userName ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">邮箱前缀：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{userName}}</span>
            </div>
        </div>
        <div class="row" [style.display]="jobName ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">项目名：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{jobName}}</span>
            </div>
        </div>
        <div class="row" [style.display]="product ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">产品线：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{product}}</span>
            </div>
        </div>
        <div class="row" [style.display]="startday ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">起始时间：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{startday}}</span>
            </div>
        </div>
        <div class="row" [style.display]="endday ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">结束时间：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{endday}}</span>
            </div>
        </div>
        <div class="row" [style.display]="changequery ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">是否需要评审：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{changequery}}</span>
            </div>
        </div>
        <div class="row" [style.display]="queryList ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">相关文件：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger">{{queryList}}</span>
            </div>
        </div>
        <div class="row no-border" [style.display]="download ? 'block' : 'none'">
            <div class="col-lg-2">
                <span class="text-muted">结果查看地址：</span>
            </div>
            <div class="col-lg-8 ">
                <span class="text-danger"><a href="{{download}}" target="_blank">{{download}}</a></span>
            </div>
        </div>
    </div>
</div>