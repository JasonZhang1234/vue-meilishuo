<template>
	<div class="footer">
		<ul>
			<li>
				<router-link to="home">
					<div></div>
					首页
				</router-link>
			</li>
			<li>
				<router-link to="select">
					<div></div>
					分类
				</router-link>	
			</li>
			<li>
				<router-link to="car">
					<div></div>
					购物车
				</router-link>
			</li>
			<li>
				<router-link to="mine">
					<div></div>
					我
				</router-link>
			</li>
		</ul>
	</div>
</template>


<style scoped>
	.footer{
		position: fixed;
		bottom: 0;
		height: 1.3rem;
		line-height: .2rem;
		background: #fafafa;
		width: 100%;
		border-top: .02rem solid #CCCCCC;
	}
	.footer ul{
		display: flex;
	}
	.footer ul li{
		width: 25%;
		text-align: center;
	}
	.footer ul li a{
		color: #666;
		
	}
	.footer ul li div{
		background-image: url(../../assets/imgs/footer.png);
		background-repeat: no-repeat;
		height: .54rem;
		width: .5rem;
		background-size: 220%;
		background-position-x: 0;
		margin: .2rem auto;
	}
	.footer ul li:nth-of-type(2) div{
		background-position-y: -.5rem;
	}
	.footer ul li:nth-of-type(3) div{
		background-position-y: -1rem;
		/*background-position-x: -.0161rem;*/
		
	}
	.footer ul li:nth-of-type(4) div{
		background-position-y: -1.53rem;
	}
	
	.footer ul li .router-link-active div{
		background-position-x: -.55rem;
	}
	.footer ul li .router-link-active{
		color: rgb(255,51,102);
	}
</style>


<script>
	
</script>