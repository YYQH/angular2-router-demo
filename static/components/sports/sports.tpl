<style type="text/css">@import url(sports.scss?__inline);</style>
<div class="app-main-{{type}}">
    <div class="page-header">
        <h1><span class="glyphicon glyphicon-menu-hamburger"></span> {{title}}</h1>
    </div>
    <form class="container-fluid main-form form-horizontal" #f="form">
        <div class="row">
            <div class="form-group">
                <label for="main_email" class="col-lg-2 control-label">邮箱前缀：</label>
                <div class="col-lg-5 main-form-email">
                    <input type="text" class="form-control" placeholder="请输入邮箱前缀" id="main_email" ng-control="userName"><label for="main_email" class="text-muted">@example.com</label>
                </div>
                <div class="col-lg-5">
                    <span class="description"></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label for="main_project" class="col-lg-2 control-label">项目名：</label>
                <div class="col-lg-5 main-form-sug">
                    <input type="text" class="form-control" placeholder="请输入项目名称" id="main_project" ng-control="jobName" [(ng-model)]="jobName" (keyup)="changeProject(f.value.jobName)" />
                    <ul class="list-group" [style.display]="hideStyles.showJobsList ? 'block' : 'none'">
                        <li class="list-group-item" *ng-for="#job of jobs" (click)="chooseJob(job)">{{job.name}}</li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <span class="description">（注：项目名称）</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label for="main_startday" class="col-lg-2 control-label">起始时间：</label>
                <div class="col-lg-5 main-form-date">
                    <input type="date" class="form-control" id="main_startday" ng-control="startday">
                </div>
                <div class="col-lg-5">
                    <span class="description"></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label for="main_endday" class="col-lg-2 control-label">结束时间：</label>
                <div class="col-lg-5 main-form-date">
                    <input type="date" class="form-control" id="main_endday" ng-control="endday">
                </div>
                <div class="col-lg-5">
                    <span class="description"></span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label class="col-lg-2 control-label">产品线：</label>
                <div class="col-lg-5 main-form-radio">
                    <span>
                        <input type="radio" class="form-control" id="main_type_wise" value="wise" name="mainCoreType" (click)="radioChange($event.target.value, 'type')" />
                        <label for="main_type_wise">&nbsp;移动端</label>
                    </span>
                    <span>
                        <input type="radio" class="form-control" id="main_type_pc" value="pc" name="mainCoreType" (click)="radioChange($event.target.value, 'type')" />
                        <label for="main_type_pc">&nbsp;PC端</label>
                    </span>
                </div>
                <div class="col-lg-5">
                    <span class="description"></span>
                </div>
            </div>
        </div>
        <div class="row" [style.display]="hideStyles.review ? 'none' : 'block'">
            <div class="form-group">
                <label class="col-lg-2 control-label">是否需要评审：</label>
                <div class="col-lg-5 main-form-radio">
                    <span>
                        <input type="radio" class="form-control" id="main_changequery_yes" value="yes" name="mainCoreChangeQuery" (click)="radioChange($event.target.value, 'changequery')">
                        <label for="main_changequery_yes">&nbsp;是</label>
                    </span>
                    <span>
                        <input type="radio" class="form-control" id="main_changequery_no" value="no" name="mainCoreChangeQuery" (click)="radioChange($event.target.value, 'changequery')">
                        <label for="main_changequery_no">&nbsp;否</label>
                    </span>
                </div>
                <div class="col-lg-5">
                    <span class="description">（注：项目需要评审人批准）</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="form-group">
                <label for="main_queryUpload" class="col-lg-2 control-label">相关文件：</label>
                <div class="col-lg-5 main-form-file">
                    <input type="file" id="main_queryUpload" class="btn btn-default" (change)="uploadFile($event)">
                </div>
                <div class="col-lg-5">
                    <span class="description">（注：如需额外资料，请上传文件）</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <a href="/help" target="_blank">相关协议。</a>
            </div>
        </div>
        <div class="row no-border">
            <div class="col-lg-5 col-lg-offset-2">
                <button class="btn btn-success" (click)="submit(f.value)">保存</button>
            </div>
        </div>
    </form>
</div>