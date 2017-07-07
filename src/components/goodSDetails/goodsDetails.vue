<template>
		<div class="goodsDetails" v-if="dataHome.data">
			<ul class="topImage">
				<li v-for="i in dataHome.data.itemInfo.topImages" :key="i">
					<img v-lazy="i"/>
				</li>
			</ul>
			<div class="particulars">
				<p class="title">{{dataHome.data.itemInfo.title}}</p>
				<div class="itemInfo-Tbox">
					<div>
						<span class="itemInfo-Tbox-price">{{dataHome.data.itemInfo.price}}</span>
						<del>{{dataHome.data.itemInfo.oldPrice}}</del>
						<span class="itemInfo-Tbox-price-disc" v-if="dataHome.data.itemInfo.discountDesc">{{dataHome.data.itemInfo.discountDesc}}</span>
					</div>
				</div>
				<div class="columns">
					<span v-for="j in dataHome.data.columns">{{j}}</span>
				</div>
			</div>
			
			<div class="youhui">
				<div>
					<span class="dian">·</span>
					<span class="manjian">满98元减5元</span>
				</div>
				<span class="more">更多&nbsp;〉</span>
			</div>
			<div class="shop-top"></div>
			<div class="meili-optimization">
				<img src="../../assets/imgs/youxuan.jpg" />
				<div class="shop-box">
					<p class="yxshop">美丽优选</p>
					<div class="counts">
						<span class="sellall">总销量 {{dataHome.data.shopInfo.cSells}}</span>
						<span class="productsall">全部宝贝 {{dataHome.data.shopInfo.cGoods}}</span>
					</div>
				</div>
				<div class="enter-shop">
					进店逛逛
				</div>
			</div>
			<div class="shop-des-box">
				<ul class="shop-des">
						<li v-for="m in dataHome.data.shopInfo.score">
							<span>{{m.name}}</span>
							<span>{{m.score}}</span>
							<span v-show='m.isBetter'>高</span>
							<span v-show='!m.isBetter'>低</span>
						</li>
				</ul>
			</div>
			
			<div class="services-box">
				<ul>
					<li v-for='k in dataHome.data.shopInfo.services'>
						<img v-lazy="k.icon"/>
						<span>{{k.name}}</span>
					</li>
				</ul>
			</div>
			<div class="shop-top"></div>
			<div class="des-nav">
				<ul>
					<li>
						<span>图文详情</span>
					</li>
					<li>
						<span>商品参数</span>
					</li>
					<li>
						<a href="#pingjia"><span>评价({{dataHome.data.rate.cRate}})</span></a>
					</li>
					<li>
						<span>热卖推荐</span>
					</li>
				</ul>
			</div>
			<div class="des-des">
				<p>{{dataHome.data.itemInfo.title}}</p>
				<p class="effect">穿着效果</p>
			</div>
			<ul class="des-des-box">
				<li v-for='n in dataHome.data.detailInfo.detailImage[0].list'>
					<img v-lazy="n"/>
				</li>
			</ul>
			<div class="shop-top"></div>
			<div class="des-size">
				<h3>商品参数</h3>
				<table class="first-table" cellpadding="0" cellspacing="0" v-if='dataHome.data.itemParams.rule'>
					<tr v-for='z in dataHome.data.itemParams.rule.tables[0]'>
						<td v-for='x in z'>{{x}}</td>
					</tr>
					
				</table>
				<table class="second-table" v-if="dataHome.data.itemParams.rule">
					<tr v-for='z in dataHome.data.itemParams.rule.tables[1]'>
						<td v-for='a in z'>{{a}}</td>
					</tr>
				</table>
			</div>
			<ul>
				<li v-for='e in dataHome.data.itemParams.info.images'>
					<img v-lazy="e"  style="width: 100%;"/>
				</li>
			</ul>
			<div class="shop-top"></div>
			<div class="products-evaluate" id="pingjia">
				<div v-show='dataHome.data.rate.cRate==0' class="evaluate-none">
					暂无评价
				</div>
				<div class="evaluate-you" v-show='dataHome.data.rate.cRate!=0'>
					<div class="evaluate-top">
						<span>购买评价</span>
						<span>更多&nbsp;〉</span>
					</div>
					<div class="evaluate-content" v-if="dataHome.data.rate.list">
						<div class="evaluate-content-top">
							<img v-lazy="dataHome.data.rate.list[0].user.avatar" />
							<p>{{dataHome.data.rate.list[0].user.uname}}</p>
						</div>
						<p class="evaluate-title">{{dataHome.data.rate.list[0].content}}</p>
						<div class="evaluate-time">
							<span>{{dataHome.data.rate.list[0].created}}</span>
							<span>{{dataHome.data.rate.list[0].style}}</span>
						</div>
						<div class="evaluate-img">
							<ul>
								<li v-for='r in dataHome.data.rate.list[0].images'>
									<img v-lazy="r"  />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="shop-top"></div>
			<!--<div class="hot-sell">热卖推荐</div>
			<ul class="hot-sell-list">
				<li>
					<img src="" alt="" />
					<p>收到回复就是都会发生及地方哈就是的</p>
					<div>
						<span>kdasd</span>
						<span>☆</span>
						<span>23211</span>
					</div>
				</li>
			</ul>-->
			<div class="shopcar-top">
				<router-link to='car'>
					<div class="shopcar-img">
						<span class="carsnum">{{count}}</span>
					</div>
				</router-link>
				<div class="totop-img" @click="fanhui" id="totop-img"></div>
			</div>
			<div class="footer">
				<ul>
					<li>客服</li>
					<li>店铺</li>
					<li>收藏</li>
					<li @click='addToCar'>加入购物车</li>
					<li><router-link to='car'>购买</router-link></li>
				</ul>
			</div>
		</div>
</template>



<style scoped>
	.goodsDetails{
		background: #fff;
	}
	.topImage{
		display: flex;
		overflow: auto;
		padding: 0 0.2rem;
	}
	.topImage li{
		margin-right: 0.2rem;
		
	}
	.topImage li img{
		width: 8.333333rem;
		height: 12rem;
		
	}
	.particulars{
		padding: 0.35rem 0.35rem;
	}
	.particulars .title{
		font-size: 0.44rem;
		line-height: 0.506666rem;
	}
	.itemInfo-Tbox{
		display: flex;
		justify-content: center;
		margin-top: 0.2rem;
	}
	.itemInfo-Tbox-price{
		font-size: 0.56rem;
		color: #f36;
		margin-right: 0.1rem;
	}
	.itemInfo-Tbox del{
		font-size: 0.35rem;
		margin-right: 0.1rem;
		color: #999;
		
		
	}
	.itemInfo-Tbox-price-disc{
		display: inline-block;
		padding: 0.03rem 0.1rem;
		border-radius: 1rem;
		background: #f36;
		color: #fff;
		font-size: 0.326666rem;

	}
	.columns{
		display: flex;
		justify-content: center;
		margin-top: 0.3rem;
	}
	.columns span{
		flex: auto;
		text-align: center;
		font-size: 0.35rem;
		color: #999;
		border-right: 0.013333rem solid #ccc;
	}
	.columns span:last-child{
		border: none;
	}
	.youhui{
		display: flex;
		align-items: center;
		height: 1.2rem;
		background: #fafafa;
		border-top: 1px solid #eaeaea;
		padding:0 0.4rem;
		justify-content: space-between;
	}
	.youhui div{
		display: flex;
		align-items: center;
	}
	.dian{
		color: red;
		font-size: 1rem;
		margin-right: 0.133333rem;
	}
	.manjian{
		font-size: 0.4rem;
	}
	.more{
		font-size: 0.38rem;
	}
	.shop-top{
		width: 100%;
		height: 0.266666rem;
		background: #f2f5f8;
	}
	.meili-optimization{
		display: flex;
		position: relative;
		align-items: center;
		padding: 0.4rem 0.266666rem;
		
	}
	.meili-optimization img{
		width: 1.333333rem;
		height: 1.333333rem;
		border: 1px solid #ccc;
		margin-right: 0.25rem;
	}
	.enter-shop{
		position: absolute;
		padding: 0.15rem 0.43rem;
		border: 0.013333rem solid #000;
		font-size: 0.4rem;
	
		top: 0.8rem;
		right: 0.4rem;
	}
	.yxshop{
		font-size: 0.43rem;
		line-height: 0.5rem;
	}
	.shop-box{
		height: 1.333333rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.counts{
		font-size: 0.3rem;
	}
	.sellall{
		margin-right: 0.266666rem;
	}
	.shop-des-box{
		border-bottom: 0.013333rem solid #808080;
	}
	.shop-des{
		display: flex;
		padding: 0 0.266666rem 0.3rem 0.3rem;
		
	}
	.shop-des li{
		width: 33.33%;
	}
	.shop-des li span{
		font-size: 0.32rem;
	}
	
	.shop-des li span:nth-child(2){
		color: #f13e3a;
	}
	.shop-des li span:nth-child(3){
		background: #f13e3a;
		color: #fff;
	}
	.shop-des li span:nth-child(4){
		background: greenyellow;
		color: red;
	}
	.services-box ul{
		padding: 0.4rem 0.4rem 0.2rem 0.4rem;
		display: flex;
		flex-flow: wrap;
		
	}
	.services-box ul li{
		width: 50%;
		display: flex;
		align-items: center;
		margin-bottom: 0.3rem;
	}
	.services-box ul li img{
		width: 0.586666rem;
		height: 0.586666rem;
		margin-right: 0.2rem;
	}
	.services-box ul li span{
		font-size: 0.32rem;
	}
	.des-nav ul{
		height: 1.2rem;
		display: flex;
		align-items: center;
		border: 1px solid #ccc;
	}
	.des-nav ul li{
		width: 25%;
		text-align: center;
		border-right: 1px solid #ccc;
	}
	.des-nav ul li:last-child{
		border: none;
	}
	.des-nav ul li span{
		font-size: 0.4rem;
	}
	.des-des{
		padding: 0.266666rem;
		font-size: 0.4rem;
	}
	.effect{
		font-size: 0.46rem;
		margin-top: 0.266666rem;
	}
	.des-des-box li img{
		width: 100%;
	}
	.des-size{
		padding-left:0.266666rem ;
	}
	table {
		width: 100%;
	}
	tr{
	 	padding: 0.133333rem;
	}
	td{
		border-bottom: 1px solid #CCCCCC;
		height:1.2rem; 
		/*text-align: center;*/
		font-size: 0.346666rem;
	}
	table tr:last-child td{
		border: none;
	}
	.des-size h3{
		margin-top: 0.2rem;
		font-size: 0.4rem;
	}
	.evaluate-none{
		width: 100%;
		height: 1.6rem;
		text-align: center;
		line-height: 1.6rem;
		font-size: 0.4rem;
	}
	.evaluate-top{
		width: 100%;
		padding: 0 0.4rem;
		height: 1.066666rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 0.013333rem solid #ccc;
	}
	.evaluate-content{
		padding: 0.4rem 0.4rem;
	}
	.evaluate-content-top{

		display: flex;
		align-items: center;
		font-size: 0.35rem;
		
	}
	.evaluate-content-top img{
		width: 1.2rem;
		height: 1.2rem;
		border: 0.026666rem solid #ccc;
		border-radius: 50%;
		margin-right: 0.266666rem;
		
	}
	.evaluate-title{
		font-size: 0.2rem;
		margin-top: 0.15rem;
	}
	.evaluate-time{
		font-size: 0.2rem;
		color: #999;
		margin-top: 0.133333rem;
	}
	.evaluate-img ul {
		display: flex;
		overflow: hidden;
		padding-top: 0.2rem;
	}
	.evaluate-img ul img{
		width: 2rem;
		height: 2rem;
		
	}
	.evaluate-img ul li{
		margin-right: 0.133333rem;
	}
	.hot-sell{
		padding-left: 0.4rem;
		font-size: 0.426666rem;
		height: 1.1rem;
		line-height: 1.1rem;
	}
	
	
	.shopcar-top{
		height: 2.7rem;
		width: 1.2rem;
		position: fixed;
		right: 0.333333rem;
		bottom: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.shopcar-top  div{
		width: 1.2rem;
		height: 1.2rem;
	}
	.shopcar-img{
		background: url(../../assets/imgs/shopcar.png) no-repeat;
		background-size: cover;
		position: relative;
	}
	.totop-img{
		background: url(../../assets/imgs/shopcar.png) no-repeat;
		background-size: cover;
		background-position: 0 -1.466666rem;
		display: none;
	}
	.xianshi{
		display: block;
		background: url(../../assets/imgs/shopcar.png) no-repeat;
		background-size: cover;
		background-position: 0 -1.466666rem;
	}
	.footer ul{
		height: 1.4rem;
		display: flex;
		line-height: 1.4rem;
		background: #999;
		
	}
	.footer ul li{
		width: 15%;
		text-align: center;
		font-size: 0.4rem;
		background: #fff;
	}
	.footer ul li:nth-child(4){
		width: 30%;
		background: #ffe817;
	}
	.footer ul li:nth-child(5){
		width: 25%;
		background: #f36;
		color: #fff;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.products-evaluate{
		margin-bottom: 1rem;
	}
	.carsnum{
		display: inline-block;
		width: 0.4rem;
		height: 0.4rem;
		background-color: #FF0000;
		line-height: 0.4rem;
		text-align: center;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 0.28rem;
	}
</style>



<script>
	export default{
		data(){
			return{
				count:0
			}
		},
	    computed:{
	    	dataHome(){
//	    		console.log(this.$store.state.newsData.data)
				
	  			return this.$store.state.newsData.data;
	    	}
	    },
	    methods:{
	    	myScroll(){
	    		setTimeout(function(){
	    		
		    		var toTop = document.querySelector('#totop-img');
		    		console.log(toTop)
					document.body.onscroll = function(){
						if(document.body.scrollTop>2000){
								toTop.className = 'xianshi';
						}else{
								toTop.className = 'totop-img';	
						}
						
					}
				},1000)
	    	},
	    	fanhui(){
	    		document.body.scrollTop=0;
	    		document.documentElement.scrollTop=0;
	    	},
	    	addToCar(){
	    		this.$store.commit('addCar',{
	    			addData:this.dataHome.data
	    		})
	    		this.count++;
	    	}
	    
	    },
	    mounted(){
	    	
	    	this.myScroll();
		}
	    
	}
	
	
</script>