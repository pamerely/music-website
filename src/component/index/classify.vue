<template>
	<main class="main">
		<div class="div"></div>
		<section v-for="(v,i) in data" :key="i">
			<p class="font">{{v.title}}</p>
			<div class="recom-song clear">
				<div class="hot" v-for="(j,k) in v.con" :key="k">
						<router-link to="/rank-hot">
							<p class="hotBox">{{j}}</p>
						</router-link>
				</div>
				
			</div>
		</section>
		<p class="font" v-for="(v,i) in this.$store.state.p" :key="i">{{v}}</p>
	</main>
</template>

<script >

	export default{
		data(){
			return{
				data:[]			
			}
		},
		mounted(){
			this.$http.get("./src/assets/js/data.json")
			.then((res)=>{
				this.data=res.data.data1
			})
		}
	}
</script>
<style scoped>
	

	.div{
		margin-top: 7.3rem;
	}
	.main{
		margin-bottom: 4.3rem;
	}
</style>