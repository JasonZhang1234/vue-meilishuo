import './assets/js/flexible.js';
import './assets/css/reset.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper'; 
import resource from 'vue-resource';
import Vuex from 'vuex';



Vue.use(resource);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
Vue.filter('num',function(a){
	let num,result;
	num = a;
	result = num.toFixed(2);
	return result;
})

//store 仓库
const store=new Vuex.Store({
	//state 存储的状态
	state:{
//		data:[]
			newsData:{
				data:[],
				carData:[],
				carDataNum:0,
				carChe:[],
				price:0
			}

	},
	//行为，对状态进行改变，是静态行为
	mutations:{
		getDataHome(state,opt){
			state.newsData.data= opt;
//			console.log(state.newsData.data);
//			console.log(opt);
			
		},
		addCar(state,opt){
			var odata = state.newsData.carData;
			if(odata.length==0){
				opt.num=1;				
				odata.push(opt);
//				console.log(opt)
			}else{
				for(var i=0;i<odata.length;i++){
//					console.log(odata[i]);
					if(odata[i].addData.itemInfo.iid==opt.addData.itemInfo.iid){
						odata[i].num+=1;
						var flag = true;
					}
				}
				if(!flag){
					opt.num=1;				
					odata.push(opt);
				}
			}
//			console.log(odata)
		},
		del(state,opt){
			state.newsData.carData.splice(state.newsData.carData.indexOf(opt),1)
		},
		checked(state,a){
			state.newsData.carChe.push(state.newsData.carData[a])
			var b=state.newsData.carChe
			var c=0;
			for(var i=0;i<b.length;i++){
				c+=(b[i].num)*(b[i].addData.itemInfo.price.substring(1,5))
			}
			state.newsData.price=c
		},
		dels(state,a){
			
			var b=state.newsData.carChe
			for(var i=0;i<b.length;i++){
				if(b[i].addData.itemInfo.iid==state.newsData.carData[a].addData.itemInfo.iid){
					b.splice(i,1)
				}
			}
			var c=0;
			for(var i=0;i<b.length;i++){
				c+=(b[i].num)*(b[i].addData.itemInfo.price.substring(1,5))
			}
			state.newsData.price=c
			console.log(state.newsData.price)
		},
		qing(state){
				state.newsData.carChe=[]
		},
		count(state,a){
			var b=state.newsData.carChe
			for(var i=0;i<b.length;i++){
				if(b[i].addData.itemInfo.iid==state.newsData.carData[a].addData.itemInfo.iid){
					b.splice(i,1);
					state.newsData.carChe.push(state.newsData.carData[a])
				}
			}
			
			var c=0;
				if(b.length>=1){	
				for(var i=0;i<b.length;i++){
					c+=(b[i].num)*(b[i].addData.itemInfo.price.substring(1,5))
					state.newsData.price=c
			}
			}
		},
		aa(state,a){
			state.newsData.carChe.splice(a,1)
			var b=state.newsData.carChe
			console.log(b)
			state.newsData.price=0
		
		}
		
	},
	//行为，对状态进行改变，异步行为
	action:{
		
	}
})

//图片懒加载 
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload,{
	loading: "/static/imgs/loading.png"
})

new Vue({
	el:'#app',
	render:h=>h(App),
	router,
	VueAwesomeSwiper,
	resource,
	store,
	VueLazyload
	
})


