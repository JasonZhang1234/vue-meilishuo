<template>
	<div class="car-none">
		<p>您的购物车还空着呢,</p>
		<p>美物这么多,快去看看吧 ~</p>
		<router-link to="home">
			<div class="gobuy">
				去逛逛
			</div>
		</router-link>
	</div>
</template>


<style scoped>
	.car-none{
		background: #f0f0f0;
		min-height:15rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 1.733333rem;
		font-size: 0.4rem;
		margin-top: 1.48rem;
	}
	
	.gobuy{
		width: 2.373333rem;
		height: 0.933333rem;
		line-height: 0.933333rem;
		text-align: center;
		color: #fff;
		background: #f66;
		border-radius: 0.133333rem;
		margin-top: 0.8rem;
	}
	
</style>



<script>
</script>