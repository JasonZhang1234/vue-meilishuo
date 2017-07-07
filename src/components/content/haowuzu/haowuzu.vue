<template>
	<div class="haowuzu">
		<div class="haowuzu-name">
			<img src="https://s10.mogucdn.com/mlcdn/c45406/170523_3588j3005fhc2d8f1icgijbgg23gk_740x128.jpg_750x999.v1c7E.70.webp">
		</div>
		<div class="haowuzu-box" v-for="i in dataList">
			<div class="haowuzu-box-img">
				<img  v-lazy='i.image'/>
			</div>
			<ul>

				<li class="haowuzu-box-product" v-for="j in i.goodsList" @click="reqs(j.signGoodsId)">
						<router-link to="goodsDetails">
							<div class="haowuzu-box-product-img">
									<img v-lazy="j.image"/>
							</div>
							<div class="haowuzu-box-product-dis">
								{{j.description}}
							</div>
							<div class="haowuzu-box-product-price">
								￥{{j.price}}
							</div>
						</router-link>
					<li class="haowuzu-box-product" v-for="j in i.goodsList">
					<div class="haowuzu-box-product-img">
						<img  v-lazy="j.image"/>
					</div>
					<div class="haowuzu-box-product-dis">
						{{j.description}}
					</div>
					<div class="haowuzu-box-product-price">
						￥{{j.price}}
					</div>
				</li>
			</ul>
		</div>
		<div class="haowuzu-more">
			查看更多&nbsp;&nbsp;&nbsp;&nbsp;〉
		</div>
	</div>
</template>


<style>
	.haowuzu-name img{
		width: 100%;
	}
	
	.haowuzu-box-img img{
		width: 100%;
	}
	.haowuzu-box ul{
		display: flex;
		padding: 0.266666rem 0.266666rem 0 0.266666rem;
		background: #fff;
		white-space: normal;
		overflow: auto;
		padding-bottom: .2rem;
	}
	.haowuzu-box ul li{
		margin-right: 0.24rem;
	}

	.haowuzu-box-product-img img{
		width: 2.666666rem;
		height: 3.0rem;
	}
	.haowuzu-box-product-dis{
		max-width: 2.666666rem;
		white-space:nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 0.32rem;
		margin-top: 0.066666rem;
		margin-bottom: 0.066666rem;
		color: #3f2a20;
	}
	.haowuzu-box-product-price{
		font-size: 0.32rem;
		color: #f14a6b;
	}
	::-webkit-scrollbar{
		display: none;
	}
	.haowuzu-more{
		border-top: 0.026666rem solid #ccc;
		height: 1.2rem;
		line-height: 1.2rem;
		text-align: center;
		background: #fff;
		color:#f14a6b ;
		font-size: 0.36rem;
		margin-bottom: .3rem;
	}
</style>


<script>
	export default{
		data(){
			return{
				dataList:[],
				dataRes:[]
			}
		},
		methods:{
			request(){
				this.$http.jsonp(
					'https://simba-api.meilishuo.com/venus/topic/v2/queryTopicList/h5',
						{
							callback:'jsonp1'	
						}
				).then(function(req){
					this.dataList = req.data.data;
					
				})
			},
			reqs(str){
				this.$http({
					url:'http://localhost:8080/meilishuo',
					params:{
						str:str
					},
					method:'get'
				}).then(function(req){
//					console.log(req.data.result);
					this.$store.commit('getDataHome',{
						data:req.data.result
					})
					
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>