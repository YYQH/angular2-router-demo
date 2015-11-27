<style type="text/css">@import url('nav.scss?__inline');</style>
<ul class="nav-list">
	<li class="nav-part">
		<h3><a>项目创建</a></h3>
		<ul>
			<li>
				<h3><a [router-link]="[routes.sports.name]">{{routes.sports.data.title}}</a></h3>
			</li>
			<li>
				<h3><a [router-link]="[routes.entertainment.name]">{{routes.entertainment.data.title}}</a></h3>
			</li>
			<li>
				<h3><a [router-link]="[routes.cartoon.name]">{{routes.cartoon.data.title}}</a></h3>
			</li>
			<li>
				<h3><a>其他项目</a></h3>
			</li>
			
		</ul>
	</li>
	<li class="nav-part no-border">
		<h3><a [router-link]="[routes.list.name]">{{routes.list.data.title}}</a></h3>
	</li>
</ul>