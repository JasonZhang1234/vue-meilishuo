<template>
	<div class="car">
		<v-car-header></v-car-header>
		<v-car-none v-show="dataList.length==0"></v-car-none>
		<div class="car-box" v-show='dataList.length>=1'>
			<ul>
				<li v-for="(i,index) in dataList">
					<input type="checkbox" @click="clickme(index)" ref='div'/>
					<img :src="i.addData.itemInfo.topImages[0]" />
					<div class="goods-des">
						<p class="goods-title" >{{i.addData.itemInfo.title}}</p>
						<p class="goods-price">{{i.addData.itemInfo.price}}</p>
					</div>
					<div class="jiajian">
						<span @click="jia(i,-1,index)">▬</span>
						<span>{{i.num}}</span>
						<span @click="jia(i,1,index)">✚</span>
					</div>
				</li>
			</ul>
			<div class="totalMoney">
				<div class="checkAll">
					<span>全选:</span><input type="checkbox" v-model='check'/>
				</div>
				<div class="allMoney">
					共:&nbsp;&nbsp;{{totalMoney | num}}
				</div>
				<div class="jiesuan">
					支付
				</div>
			</div>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<style scoped>
	.car-box{
		position: absolute;
		top: 1.6rem;left: 0;
		right: 0;
		background: #fff;
		padding: 0 0.266666rem;
		margin-bottom: 1.4rem;
		min-height: 20rem;
		
	}
	
	.car-box ul li{
		display: flex;
		align-items: center;
		padding: 0.133333rem 0;
		border-bottom:0.026666rem dashed #CCCCCC;
		position: relative;
		
	}
	.car-box ul li img{
		width: 2rem;
		height: 3rem;
		border-radius: .2rem;
	}
	.car-box ul li:last-child{
		margin-bottom: 1.333333rem;
	}
	input{
		width: 0.4rem;
		height: 0.4rem;
		margin-right: 0.4rem;
	}
	.goods-des{
		height: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.266666rem 0.266666rem;
	}
	.goods-title{
		font-size: 0.4rem;
		max-width: 6.3rem;
	}
	.goods-price{
		font-size: 0.4rem;
		color: #FF0000;
	}
	.jiajian{
		display: flex;
		position: absolute;
		top: 2.2rem;
		right: 0.4rem;
	}
	.jiajian span{
		width: 0.8rem;
		height: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0.013333rem solid #3F2A20;
		margin-right: 0.133333rem;
		border-radius: 50%;
		color: #F14A6B;
		font-size: 0.45rem;
	}
	.totalMoney{
		background: #fff;
		position: fixed;
		bottom: 1.3rem;
		left: 0;
		right: 0;
		display: flex;
		padding: 0 0.4rem;
		width: 100%;
		height: 1.333333rem;
		justify-content: space-between;
		align-items: center;
	}
	.jiesuan{
		width: 25%;
		height: 1rem;
		background: #F14A6B;
		text-align: center;
		line-height: 1rem;
		font-size: 0.533333rem;
		border-radius: 0.133333rem;
		color: #fff;
		
	}
	.checkAll{
		display: flex;
		align-items: center;
		font-size: 0.5rem;
	}
	.allMoney{
		font-size: 0.5rem;
		color: #FF3366;
	}
</style>

<script>
	import vFooter from '../footer/footer';
	import vCarHeader from './car_header/car_header';
	import vCarNone from './car_none/car_none';
	export default {
		data(){
			return{
				totalMoney:0,
				check:true
			}
		},
		components:{
			vFooter,vCarHeader,vCarNone
		},
		computed:{
			dataList(){
				
				return this.$store.state.newsData.carData;
			}

		},
	
		methods:{
			
			jia(i,num,index){
				var b=this.$refs.div[index].checked
				i.num+=num;
				if(i.num==0){
					this.$store.commit('del',i)
				}
				if(b && i.num>0){
					this.$store.commit('count',index)
					this.totalMoney=this.$store.state.newsData.price
				}else{
					this.$store.commit('aa',index)
				}
			
			},
			clickme(a){
					
				var b=this.$refs.div[a].checked
				if(b){
					this.$store.commit('checked',a)
					this.totalMoney=this.$store.state.newsData.price
				}else{
					this.$store.commit('dels',a)
					this.totalMoney=this.$store.state.newsData.price
				}				
			},
			qing(){
				this.$store.commit('qing')
			}
		},
		mounted(){
			this.qing()
		
		}
	}
	
</script>