<template>
	<main class="main">
		<a @click="back()">
			<img src="../../assets/images/recommend/back.png" />
		</a>
		<input type="text" />
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
	<style scoped>
		.main{
			width: 100%;
			height: 100%;
			position: fixed;
			z-index: 6;
			background: url(../../assets/images/recommend/allBg.jpg);
		}
		img{
			width: 30px;
			height: 30px;
		}
	</style>