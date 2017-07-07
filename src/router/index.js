import Vue from 'vue';
import vueRouter from 'vue-router';

import home from '../components/home/home';
import select from '../components/select/select';
import car from '../components/car/car';
import mine from '../components/mine/mine';
import QQdl from '../components/QQ-dl/QQ-dl';
import register from '../components/register/register';

import goodsDetails from '../components/goodsDetails/goodsDetails';

Vue.use(vueRouter);

export default new vueRouter({
	routes:[
		{
			name:'home',
			path:'/home',
			component:home,
		},
		{
			name:'select',
			path:'/select',
			component:select
		},
		{
			name:'car',
			path:'/car',
			component:car
		},
		{
			name:'mine',
			path:'/mine',
			component:mine
		},
		{
			name:'register',
			path:'/register',
			component:register
		},
		{
			name:'QQdl',
			path:'/QQdl',
			component:QQdl
		},
		{
			name:'goodsDetails',
			path:'/goodsDetails',
			component:goodsDetails
		},
		{
			path:'/',
			redirect:'home'
		}
	]
})
