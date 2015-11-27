<style type="text/css">@import url('app.scss?__inline');</style>
<div class="app" id="app">
	<header id="app_header" class="app-header">
		<div class="top">
			<img class="logo-img" src="/static/img/logo.png" />
			<div class="login">
				<span>您好，欢迎回来！</span>
			</div>
			<h1>项目管理平台</h1>
		</div>
	</header>
	<nav class="app-nav">
		<navbar></navbar>
	</nav>
	<main class="app-main">
		<div class="app-main-inner"><router-outlet></router-outlet></div>
	</main>
</div>