<template>
	<div class="center" id="ocenter">
		<ul>
			<li @click="ajaxClass('pop&_=1496734153100')">
				<span :class="'pop'==ac?'active':''">流行</span>	
			</li>
			<li @click="ajaxClass('new&_=1496740448557')">
				<span :class="'new'==ac?'active':''">新款</span>
			</li>
			<li @click="ajaxClass('sell&_=1496734282870')">
				<span :class="'sell'==ac?'active':''">精选</span>
			</li>
		</ul>
		<center-main v-bind:data="data"></center-main>
	</div>
</template>

<style>
	.center{
		height: 1rem; 
		background: white;
	}
	.center ul{
		display: flex;
		justify-content: space-around;
		height: 1rem;
		border-bottom: solid 0.02rem #EEEEEE;
	}
	.center ul li{
		font-size: .4rem;
		color: #666;
	}
	.center ul li span{
		height: .88rem;
		display: block;
		line-height: 1rem;
		margin-bottom: .12rem;
		width: .9rem;
		text-align: center;
	}
	
	.active{
		border-bottom: .07rem solid rgb(255,51,102);
		color: rgb(255,51,102);
	}
	.oul{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: white;
	}
	
</style>

<script>
	import centerMain from './center-main/center-main';
	
	export default {
		data(){
			return {
				data:[],
				str: ''
			}
		},
		components:{
			centerMain
		},
		methods:{
			ajaxClass (att) {
				this.str = att;
				this.$http.jsonp(
					'http://list.meilishuo.com/search?frame=1&page=1&cKey=wap-index&tag=&maxPrice=&minPrice=&fcid=&_mgjuuid=db5979b4-d304-4ff3-82a2-345af47eb43b&sort='+att,
					{
						callback:'jsonp'
					}
				).then(function(req){
					this.data = req.body.data.list
				})
				
			}
		},
		mounted(){
			this.ajaxClass ('pop&_=1496734153100');
		},
		computed: {
			ac(){
				return this.str.split('&')[0];
			}
		}
	}
</script>