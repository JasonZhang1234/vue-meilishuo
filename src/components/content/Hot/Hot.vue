<template>
	<div class="Hot">
		<ul>
			<li v-for="i in dataList">
				<a href="#">
					<div class="Hotimg">
						<img v-lazy='i.image' />
					</div>
					<div class="Hottext">
						<div class="Hotsd">
							<span>￥{{i.discountPrice}}</span>
							<del>{{i.price}}</del>	
						</div>
						<p>立即抢购</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped>
	
	.Hot ul{
		display: flex;
		overflow: auto;
		background: white;
	}
	::-webkit-scrollbar{
		display: none;
	}
	
	.Hot ul li{
		margin-left: 0.2rem;
	}
	.Hotimg img{
		width: 2.4rem;
		height: 3.5rem;
	}
	
	.Hottext span{
		font-size:0.266666rem;
		color: red;
	}
	.Hottext del{
		font-size:0.266666rem;
		color: grey;
	}
	.Hottext p{
		width: 1.6rem;
		height:0.5rem;
		border-radius: 0.133333rem;
		background: red;
		color: #FFFFFF;
		text-align: center;
		font-size:0.3rem;
		margin-left:0.4rem;
		line-height: .5rem;
	}
	.Hotsd{
		display: flex;
		justify-content: space-around;
	}
	
</style>

<script>
	export default {
		data() {
			return {
				dataList: []
			}
		},
		methods: {
			request() {
				
				this.$http.jsonp(
					'http://mce.mogucdn.com/jsonp/multiget/3?pids=5868%2C6348%2C20114%2C13730%2C42287', {
						callback: 'jsonp5868_6348_20114_13730_42287'
					}
				).then(function(req) {
					this.dataList = req.data.data['42287'].list;
				})
			}
		},
		mounted() {
			this.request();
		}
	}
</script>