<template>
	<div class="center-main">
		<div v-for="i in data" @click="reqs(i.iid)">
			<router-link to='goodsDetails'>
				<img v-lazy='i.showLarge.img' alt="" />
			</router-link>
			<p>{{i.title}}</p>
			<p><span>{{i.price}}</span><span><em>☆</em>{{i.cfav}}</span></p>
		</div>
	</div>
</template>

<style>
	.center-main{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 .1rem;
		background: white;
	}
	.center-main img{
		width: 100%;
		height: 85%;
	}
	.center-main div{
		width: 49%;
		padding-bottom: .4rem;
	}
	.center-main div p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .5rem;
		color: #666;
	}
	.center-main div p:last-child{
		text-align: center;
	}
	.center-main div p span:first-child{
		color: rgb(255,51,102);
		margin-right: .3rem;
	}
	.center-main div p span em{
		font-size: .4rem;
		margin-right: .1rem;
	}
	
</style>


<script>
	export default ({
		props:['data'],
		methods:{
			reqs(str){
				this.$http({
					url:'http://localhost:8080/meilishuo',
					params:{
						str:str
					},
					method:'get'
				}).then(function(req){
					console.log(req)
					this.$store.commit('getDataHome',{
						data:req.data.result
					})
					
				})
			}
		}
	})
</script>