<template>
	<div class="header">
		<router-link to='home'>
			<div class="logo"></div>
		</router-link>
		<div class="search">
			<input type="text" placeholder="套装"/>
			<div class="search-img"></div>
		</div>
		<div class="message"></div>
	</div>
</template>

<style scoped> 
	.header{
		height: 1.2rem;
		background: #fff;
		display: flex;
		padding: 0 0.4rem;
		justify-content: space-between;
		align-items: center;
	}
	.logo{
		width: 0.773333rem;
		height: 0.44rem;
		background: url(../../assets/imgs/header-logo.png) no-repeat;
		background-size: 97% auto;
	}
	.message{
		width: 0.48rem;
		height: 0.426666rem;
		background: url(../../assets/imgs/header-message.png) no-repeat;
		background-size: 97% auto;
		
	}
	.search{
		position: relative;
	}
	.search input{
		width: 6.5rem;
		height: 0.746666rem;
		border: none;
		border-radius: 0.15rem;
		background: #F4F4F4;
		padding-left: 0.666666rem;
		font-size: 0.35rem;
		outline: none;
	}
	.search-img{
		width: 0.32rem;
		height: 0.346666rem;
		background: url(../../assets/imgs/header-search.png) no-repeat;
		background-size: 95% auto;
		position: absolute;
		top: 0.24rem;
		left: 0.213333rem;
	}
</style>

<script>
	
</script>