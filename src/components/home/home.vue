<template>
	<div class="home">
		<div id="main">
			<v-header></v-header>
			<v-banner></v-banner>
			<v-nav1></v-nav1>
			<v-timer :endTime='endTime'></v-timer>
			<v-hot></v-hot>
			<v-nav2></v-nav2>
			<v-haowuzu></v-haowuzu>
			<v-center></v-center>
		</div>
		<v-footer></v-footer>
	</div>
</template>

<style>
	#main{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 1.3rem;
		overflow: auto;
	}
</style>

<script>
	import vHeader from '../header/header';
	import vBanner from '../content/banner/banner';
	import vNav1 from '../content/nav1/nav1';
	import vTimer from '../content/timer/timer';
	import vHot from '../content/Hot/Hot';
	import vNav2 from '../content/nav2/nav2';
	import vHaowuzu from '../content/haowuzu/haowuzu';
	import vCenter from '../content/center/center';
	import vFooter from '../footer/footer';
	
	export default {
		data () {
        	return {
           		 endTime : '2017-06-06 00:00:00'
        	}
      	},
		components:{
			vFooter,vNav2,vCenter,vHeader,vBanner,vNav1,vTimer,vHaowuzu,vHot
		},
		methods:{
			scroll(){
				let main = document.querySelector('#main');
				let oul = document.querySelector("#ocenter").querySelector('ul');
				main.onscroll = function(){
					var st = main.scrollTop;  
					
					oul.className = '';	
					if(oul.offsetTop<=st){
						oul.className = 'oul';
					}
				}
			}
		},
		mounted(){
			this.scroll()
		}
	}
</script>