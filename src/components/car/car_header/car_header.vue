<template>
	<div class="car-header">
		
		<router-link to="home"><img src="http://s17.mogucdn.com/p1/160922/idid_ie3wmnbvgftginzsmizdambqgayde_35x52.png" /></router-link>
		<div class="car-name">购物车</div>
		
		<router-link to="home"><div class="tohome">首页</div></router-link>
		
	</div>
</template>

<script>
</script>

<style scoped>
	.car-header {
		width: 100%;
		height:1.48rem ;
		display: flex;
		padding: 0 0.4rem;
		justify-content: space-between;
		align-items: center;
		font-size: 0.533333rem;
		color: #3F2A20;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #f0f0f0;	
		z-index: 99;	
		background: white;		
		border-bottom: solid 0.02rem #CCCCCC;
	}
	.car-name{
		margin-left: 1rem;
	}
	.car-header img{
		width: 0.34rem;
		height: 0.486666rem;
	}
</style>