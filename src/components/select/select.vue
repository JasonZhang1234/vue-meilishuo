<template>
	<div class="select">
		<v-header></v-header>
		<v-select-img></v-select-img>
		<v-footer></v-footer>
	</div>
	
</template>

<style>
	
</style>

<script>
	import vHeader from '../header/header';
	import vFooter from '../footer/footer';
	import vSelectImg from './select-img/select-img'
	
	export default {
		components:{
			vFooter,vHeader,vSelectImg
		}
	}
	
</script>