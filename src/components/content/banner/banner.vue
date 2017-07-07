<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<!-- slides -->
		<swiper-slide><img class="simg" src="https://s2.mogucdn.com/mlcdn/c45406/170602_40j8bfdl8kc3014ei6f1e0451hgh7_750x500.jpg_750x999.v1c7E.70.webp" /></swiper-slide>
		<swiper-slide><img class="simg" src="https://s2.mogucdn.com/mlcdn/c45406/170602_2j46lk472b0cl21bgfebjb8gk2240_750x500.jpg_750x999.v1c7E.70.webp" /></swiper-slide>
		<swiper-slide><img class="simg" src="https://s2.mogucdn.com/mlcdn/c45406/170602_79k2klg60ei38a323507j9g216l9b_750x500.jpg_750x999.v1c7E.70.webp" /></swiper-slide>
		<!-- Optional controls -->
		<div class="swiper-pagination" slot="pagination"></div>

	</swiper>
</template>

<style>
 .simg{
 	width: 100%;
 }
</style>

<script>
	
	//轮播图 vue swiper 插件
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	export default {
		data() {
			return {
				swiperOption: {
					notNextTick: true,
					autoplay: 3000,
					autoplayDisableOnInteraction:false,
					direction: 'horizontal',	
					pagination: '.swiper-pagination',

				}
			}
		},
		

	}
</script>