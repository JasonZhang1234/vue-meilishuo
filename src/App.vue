<template>
	<div id="app" >
		<v-content></v-content>
	</div>
</template>

<style>
	#app{
		overflow-x:hidden ;
	}
</style>

<script>
			

	import vContent from './components/content/content';
	export default{
		components:{
			vContent
		}
	}
</script>

