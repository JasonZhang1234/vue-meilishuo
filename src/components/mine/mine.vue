<template>
	<div class="mine">
		<v-registers></v-registers>
		<v-inqq></v-inqq>
		<v-enter></v-enter>
	</div>
</template>

<style>
	
</style>

<script>
	import vRegisters from './registers/registers';
	import vInqq from './QQ/QQ';
	import vEnter from './enter/enter'
	export default{
		components:{
			vRegisters,vInqq,vEnter
		}
	}
</script>