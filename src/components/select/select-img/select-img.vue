<template>
	
	<div class="select-img">
		<div class="title">
			<h3>本周流行</h3>
		</div>
		<ul>
			<li v-for="i in data">
					<img  v-lazy='i.image' alt="" />
				<p>{{i.title}}</p>
			</li>
		</ul>
	</div>
</template>


<style>
	.title{
		background: white;
		height: 1rem;
		line-height: 1rem;
		padding-left: .3rem;
	}
	.title h3{
		font-weight: normal;
		font-size: .45rem;
	}
	.select-img ul{
		display: flex;
		flex-wrap: wrap;
		background: white;
		border-top: 0.02rem solid #eee;
		margin-bottom: 1.3rem;
	}
	.select-img ul li{
		width: 25%;
		border-right: 0.02rem solid #eee;
    	border-bottom: 0.02rem solid #eee;
	}
	.select-img ul li p{
		text-align: center;
		margin: .3rem 0;
		color: #666;
	}
	.select-img ul li img{
		width: 70%;
		margin: 0 auto;
	}
</style>


<script>
	export default {
		data(){
			return{
				data:[]
			}
		},
		methods:{
			request(){
				this.$http.jsonp(
					'https://simba-api.meilishuo.com/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1496805747866',
					{
						callback:'jsonp1'
					}
				).then(function(res){
					this.data = res.body.value
//					console.log(this.data)
				})
			}
		},
		mounted(){
			this.request()
		}
	}
	
</script>